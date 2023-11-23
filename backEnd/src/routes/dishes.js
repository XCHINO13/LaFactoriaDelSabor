const Router = require("express");
const router = Router();

const {consultarPlatos, platosPorEmpresa, consultarEmpresas} = require('../Controllers/dishesController');

router.get("/consultarPlatos", consultarPlatos);
router.post("/platosPorEmpresa/:id_empresa", platosPorEmpresa);
router.get("/consultarEmpresas", consultarEmpresas);

module.exports = router;