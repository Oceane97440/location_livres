const router = require("express").Router();

const livreController = require("../controllers/livreController");

router.get("/", livreController.list);
router.post("/add", livreController.save);
// router.get("/update/:id", roleController.edit);
// router.post("/update/:id", roleController.update);
// router.get("/delete/:id", roleController.delete);

module.exports = router;