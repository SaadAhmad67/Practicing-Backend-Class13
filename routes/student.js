const { Router } = require("express");
const controllers = require("../controllers/student");

const router = Router();

router.post("/", controllers.createStudent);
router.get("/", controllers.getAllStudents);
router.get("/:studentId", controllers.getStudent);
router.put("/:studentId", controllers.updateStudent);
router.delete("/:studentId", controllers.deleteStudent);


module.exports = router;