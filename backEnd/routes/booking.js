const { response } = require("./helpers/dataResponse");
const validarCampos = require('./helpers/dataValidations');
const validarCamposReserva = require('./helpers/dataValidations');

const express = require("express");
const connection = require("../connection");
const router = express.Router();
require("dotenv").config();

router.post("/registrarReserva", async (req, res) => {
    try {
        const reserva = req.body;
        console.log('reserva');
        console.log(reserva);
        const consulta = "INSERT INTO public.reserva (id_reserva, id_usuario, fecha_solicitud, hora_solicitud, fecha_reserva, hora_reserva, lugar_reserva, id_pedido) VALUES (nextval('reserva_id_reserva_seq'), 0, $1, $2, $3, $4, $5, null)";

        if (validarCamposReserva(reserva)) {
            const data = await connection.query(consulta, [reserva.fecha_solicitud], [reserva.hora_solicitud], [reserva.fecha_reserva], [reserva.hora_reserva], [reserva.lugar_reserva]);
            response(res, {data: data, msg: "Se creo la reserva correctamente.", statusCode:200});
        }


    }
    catch (error) {
        return res.status(500).json(error.message);
        console.log("Error -> ", error.message);
    }
});
