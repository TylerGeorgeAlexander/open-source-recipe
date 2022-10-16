const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const recipesController = require("../controllers/recipes");
const { ensureAuth } = require("../middleware/auth");

//Recipe Routes - simplified for now
router.get("/:id", ensureAuth, recipesController.getRecipe);

router.post("/createRecipe", upload.single("file"), recipesController.createRecipe);

// TODO
// router.post("/favoriteRecipe/:id", recipesController.favoriteRecipe);

router.put("/likeRecipe/:id", recipesController.likeRecipe);

router.delete("/deleteRecipe/:id", recipesController.deleteRecipe);

module.exports = router;
