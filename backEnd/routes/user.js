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

router.post('/login', (req,res) => {
    const user = req.body;
    console.log('uwuwuwuwwuwu')
    query = "select email,password,role,status from user where email=?";
    connection.query(query,[user.email],(err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].password !=user.password){
                return res.status(401).json({
                    message: "Incorrecto usuario o contraseña"
                });
            } else if (results[0].status === 'false'){
                return res.status(401).json({
                    message: "Ingreso exitoso"
                });
            } else if (results[0].password == user.password){
                const response = {
                    email: results[0].email,
                    role: results[0].role
                }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
                    expiresIn: '8h'
                })
                console.log(accessToken);
                res.status(200).json({
                    token: accessToken
                });
            } else {
                return res.status(400).json({
                    message: "something went wrong.please try again later"
                });
            }
        } else {
            return restart.status(500).json(err);
        }
    })
})

//minuto 13:21 Video3

module.exports = router;