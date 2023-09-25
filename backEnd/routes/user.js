const { response } = require("./helpers/dataResponse");
const { validarCampos } = require("./helpers/dataValidations");
const { validarCamposReserva } = require("./helpers/dataValidations");

const express = require("express");
const connection = require("../connection");
const router = express.Router();

const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/login", async (req, res) => {
  try {
    const user = req.body;
    console.log("user");
    console.log(user);
    const consulta = "select * from usuarios where correo = $1";
    const data = await connection.query(consulta, [user.correo]);

    if (data.rows.length > 0 && data.rows[0].contrasena === user.contrasena) {
      response(res, { data: data, msg: "Se inicio Sesion correctamente" });
    } else {
      response(res, { msg: "Error al  consultar usuario", statusCode: 404 });
      // return res.status(401).json({ error: 'Credenciales inválidas' });
      // throw Error("Email o contraseña incorrecta")
      // console.log("Error allogear usuario =>", err);
      // return res.status(404).json({
      //     error: "Email o contraseña incorrecta"
      // });
    }
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    console.log("user");
    console.log(user);

    const consulta = "insert into usuarios (id_usuario, id_rol, nombre, cedula, telefono, correo, contrasena, estado) values (nextval('usuarios_id_usuario_seq'), 1, $1, $2, $3, $4, $5, 'A')";

    if (validarCampos(user)) {
      const data = await connection.query(consulta, [user.nombre, user.cedula, user.telefono, user.correo, user.contrasena]);
      response(res, { msg: "Se creo el usuario correctamente.", statusCode: 200 });
    } else {
      response(res, { msg: "Todos los campos deben estar llenos.", statusCode: 400 });
    }
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

router.post("/registrarReserva", async (req, res) => {
  try {
    const reserva = req.body;
    const consulta = "INSERT INTO reserva (id_reserva, id_usuario, fecha_solicitud, hora_solicitud, fecha_reserva, hora_reserva, lugar_reserva, id_pedido, estado) VALUES (nextval('reserva_id_reserva_seq'), $1, $2, $3, $4, $5, $6, null, 'A')";
    const consultaValidarReserva = "SELECT * FROM reserva WHERE id_usuario = $1;";
    const data = await connection.query(consultaValidarReserva, [reserva.id_usuario]);
    console.log("reserva");
    console.log(reserva);

    if (data.rows.length > 0) {
      response(res, { msg: "Ya tienes una reserva creada.", statusCode: 401 });
    // return res.status(401).json({ error: 'Ya tienes una reserva creada' });
    } else {
      if (validarCamposReserva(reserva)) {
        const data = await connection.query(consulta, [reserva.id_usuario, reserva.fecha_solicitud, reserva.hora_solicitud, reserva.fecha_reserva, reserva.hora_reserva, reserva.lugar_reserva]);
        response(res, { data: data, msg: "Se creo la reserva correctamente.", statusCode: 200 });
      } else {
        response(res, { msg: "Verifica los datos de la reserva.", statusCode: 400 });
      }
    }
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

router.get("/reservas", async (req, res) => {
  try {
    const consulta = "SELECT * FROM reserva WHERE estado = 'A' OR estado = 'I';";
    const data = await connection.query(consulta);
    response(res, { data: data.rows, msg: "Lista de Reservas.", statusCode: 200 });
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

router.post('/eliminarReserva', async (req, res) => {
  try {
    const reserva = req.body;
    console.log(reserva);
    const consulta = "UPDATE reserva SET estado = 'I' WHERE id_reserva = $1";
    const data = await connection.query(consulta, [reserva.id_reserva]);
    response(res, { data: data.rows, msg: "Se elimino la reserva correctamente.", statusCode: 200 });
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
});

module.exports = router;
