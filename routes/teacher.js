const { Router } = require("express");
const controllers = require("../controllers/teacher");

const router = Router();

router.post("/", controllers.create);
router.get("/", controllers.getAll);



module.exports = router;