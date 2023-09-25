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

    console.log(data.rows);

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

module.exports = router;
