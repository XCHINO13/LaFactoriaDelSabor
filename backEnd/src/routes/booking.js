const { response } = require("../helpers/dataResponse");
const { validarCamposReserva } = require("../helpers/dataValidations");

const connection = require("../../connection");
const Router = require("express");
const router = Router();

router.post("/registrarReserva", async (req, res) => {
  try {
    const reserva = req.body;
    console.log('--- reserva ---');
    console.log(reserva);
    const consulta = "INSERT INTO reserva (id_reserva, id_usuario, fecha_solicitud, hora_solicitud, fecha_reserva, hora_reserva, lugar_reserva, id_pedido, estado, nombre, telefono, cant_personas) VALUES (nextval('reserva_id_reserva_seq'), $1, $2, $3, $4, $5, $6, null, 'A', $7, $8, $9)";
    const consultaValidarReserva = "SELECT * FROM reserva WHERE id_usuario = $1 AND estado = 'A';";

      console.log('ksandkajsbdkahsbdkas');
      if (reserva.id_rol === 2) {
        const data = await connection.query(consultaValidarReserva, [reserva.id_usuario]);
        if (data.rows.length > 0) {
          return response(res, { msg: "Ya tienes una reserva creada.", statusCode: 401 });
        }
      } else if (reserva.id_rol !== 2 && reserva.id_reserva !== null) {
        const actualizar = "UPDATE reserva SET fecha_reserva = $1, hora_reserva = $2, lugar_reserva = $3, nombre = $4, telefono = $5, cant_personas = $6 WHERE id_reserva = $7";
        const reservaActualizada = await connection.query(actualizar, [reserva.fecha_reserva, reserva.hora_reserva, reserva.lugar_reserva, reserva.nombre, reserva.telefono, reserva.cant_personas, reserva.id_reserva]);
        return response(res, { data: reservaActualizada.rows, msg: "Se actualizo la reserva correctamente.", statusCode: 200 });
      }

      if (validarCamposReserva(reserva)) {
        const data = await connection.query(consulta, [reserva.id_usuario, reserva.fecha_solicitud, reserva.hora_solicitud, reserva.fecha_reserva, reserva.hora_reserva, reserva.lugar_reserva, reserva.nombre, reserva.telefono, reserva.cant_personas]);
        return response(res, { data: data.rows, msg: "Se creo la reserva correctamente.", statusCode: 200 });
      } else {
        return response(res, { msg: "Verifica los datos de la reserva.", statusCode: 400 });
    }
  } catch (error) {
    console.log("ERROR =>", error.message);
    return res.status(500).json(error.message);
  }
});

router.post("/consultarReservas/:id_usuario", async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const consultarUsuario = "SELECT * FROM usuarios WHERE id_usuario = $1;";
    const dataResevasUsuario = await connection.query(consultarUsuario, [id_usuario]);
    const datosUsuario = dataResevasUsuario.rows[0];
    let consultaReservas = "";
    let data = [];
    console.log("---datosUsuario---");
    console.log("idUsuario = ", id_usuario);
    console.log("idRol = ", datosUsuario.id_rol);

    switch (datosUsuario.id_rol) {
      case 1:
        consultaReservas = "SELECT * FROM reserva WHERE estado = 'A' OR estado = 'I';";
        data = (await connection.query(consultaReservas)).rows;
        break;
      case 2:
        consultaReservas = "SELECT * FROM reserva WHERE estado = 'A' AND id_usuario = $1;";
        data = (await connection.query(consultaReservas, [id_usuario])).rows;
        break;
      default:
        console.log("ERROR => id_rol No encontrado.");
        break;
    }

    if (data.length > 0) {
      response(res, { data: data, msg: "Lista de reservas.", statusCode: 200 });
    } else if (data.length <= 0 && req.id_rol === 1) {
      response(res, { msg: "No se han encontrado reservas.", statusCode: 404 });
    } else {
      response(res, { msg: "No hay reservas disponibles.", statusCode: 400 });
    }
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

router.post("/eliminarReserva/:id_reserva", async (req, res) => {
  try {
    const { id_reserva } = req.params;
    const consulta = "UPDATE reserva SET estado = 'I' WHERE id_reserva = $1";
    const data = await connection.query(consulta, [id_reserva]);
    response(res, { data: data.rows, msg: "Se elimino la reserva correctamente.", statusCode: 200 });
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

module.exports = router;
