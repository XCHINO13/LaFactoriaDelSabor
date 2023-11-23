const { response } = require("../helpers/dataResponse");
const { validarCamposReserva } = require("../helpers/dataValidations");

const connection = require("../../connection");

const consultarEmpresas = async (req, res) => {
    try {
        empresas = "SELECT * FROM empresas;";
        const data = (await connection.query(empresas)).rows
        console.log(data);

        return response(res, { data: data , statusCode: 200});

    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

const consultarPlatos = async (req, res) => {
    try {
        consultarPlatos = "SELECT * FROM platos;";
        const data = (await connection.query(consultarPlatos)).rows
        return response(res, { data: data ,msg: "Platos", statusCode: 200});

    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

const platosPorEmpresa = async (req, res) => {
    try {
        const { id_empresa } = req.params;
        console.log(req.params);
        const {estado = 'A'} = req.query;

        // COM Para consultar platos en estado activo o inactivo
        // const consultarPlatos = "SELECT * FROM platos WHERE id_empresa = $1 where estado = $2;";
        // const datosQuery = [id_empresa, estado];
        const consultarPlatos = "SELECT * FROM platos WHERE id_empresa = $1";
        const datosQuery = [id_empresa];

        const dataResponse = (await connection.query(consultarPlatos, datosQuery)).rows

        return response(res, {data: dataResponse})

    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    consultarPlatos,
    platosPorEmpresa,
    consultarEmpresas
};
