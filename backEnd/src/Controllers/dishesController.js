const { response } = require("../helpers/dataResponse");
const { validarCamposReserva } = require("../helpers/dataValidations");

const connection = require("../../connection");

const consultarPlatos = async (req, res) => {
    try {
        consultarPlatos = "SELECT * FROM platos;";
        const data = (await connection.query(consultarPlatos)).rows
        return response(res, { data: data ,msg: "Platos", statusCode: 200});

        // const { id_usuario } = req.params;
        // const consultarUsuario = "SELECT * FROM usuarios ;";
        // const datosUsuario = await connection.query(consultarUsuario, [id_usuario]);
        // const infoUsuario = datosUsuario.rows[0];
        // console.log(` USUARIO => ID${id_usuario} ROL${infoUsuario.id_rol} EMPRESA${infoUsuario.id_empresa}`)

        // let consultaPlatos = "";
        // let data = [];

        // switch (infoUsuario.id_rol) {
        //     case 3:
        //         consultarPlatos = "SELECT * FROM platos;";
        //         data = (await connection.query(consultarPlatos)).rows;
        //         break;
        //     case 2:
        //         consultarPlatos = "SELECT * FROM platos WHERE id_empresa = $1;";
        //         data = (await connection.query(consultarPlatos, [infoUsuario.id_empresa])).rows
        //         break;
        //     case 1:
        //         consultarPlatos = "SELECT * FROM platos WHERE id_empresa = $1;";
        //         data = (await connection.query(consultarPlatos, [infoUsuario.id_empresa])).rows
        //         break;
        //     default:
        //         console.log("ERROR => id_rol No encontrado.");
        //         break;
        // }

    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

const platosPorEmpresa = async (req, res) => {
    try {
        const {
            id_empresa
        } = req.params;

        const {estado = 'A'} = req.query;

        const consultarPlatos = "SELECT * FROM platos WHERE id_empresa = $1 where estado = $2;";
        const datosQuery = [id_empresa, estado];

        const dataResponse = (await connection.query(consultarPlatos, datosQuery)).rows

        return response(res, {data: dataResponse})

    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    consultarPlatos,
    platosPorEmpresa
};
