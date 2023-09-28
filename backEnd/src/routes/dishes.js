const Router = require("express");
const router = Router();

const {consultarPlatos, platosPorEmpresa} = require('../Controllers/dishesController');

router.get("/consultarPlatos", consultarPlatos);
router.post("/platosPorEmpresa/:id_empresa", platosPorEmpresa);

module.exports = router;