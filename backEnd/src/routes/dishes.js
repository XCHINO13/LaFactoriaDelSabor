const Router = require("express");
const router = Router();

const {consultarAllPlatos, consultarPlatosByEmpresa} = require('../Controllers/dishesController');

router.post("/consultarPlatos/", consultarAllPlatos);
router.post("/consultarPlatos/:id_empresa", consultarPlatosByEmpresa);

module.exports = router;