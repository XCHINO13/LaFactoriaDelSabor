const { response } = require('./helpers/dataResponse');

const express = require('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/signup', (req, res) => {
    let user = req.body;
    query = "select email,password,role,status from user where email=?"
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "insert into user(name,contactNumber,email,password,status,role) values(?,?,?,?,'false','user')";
                connection.query(query, [user.name, user.contactNumber, user.email, user.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({
                            message: "Usuario Registrado con exito"
                        });
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({
                    message: "Email Registrado en la base de datos"
                });
            }
        } else {
            return res.status(500).json(err);
        }

    })

})

router.post('/login', async (req,res) => {
    try{
        const user = req.body;
        console.log('user');
        console.log(user);
        const consulta = "select * from usuarios where correo = $1";
        const data = await connection.query(consulta, [user.correo]) 
        //console.log("Result -> ", data.rows);

        if(data.rows.length > 0 && data.rows[0].contrasena === user.contrasena){
            // return res.status(200).json(data.rows);
            response(res, {data: data, msg: "Se inicio Sesion correctamente"});
        } else {
            response(res, { msg: "Error al  consultar usuario", statusCode:404});
            // return res.status(401).json({ error: 'Credenciales inválidas' });
            // return res.status(500).json('email o contraseña incorrectos');
            // throw Error("Email o contraseña incorrecta")
            // console.log("Error allogear usuario =>", err);
            // return res.status(404).json({
            //     error: "Email o contraseña incorrecta"
            // });
        }

    }
    catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
})

//minuto 13:21 Video3

module.exports = router;