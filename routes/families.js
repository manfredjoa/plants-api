import { Router } from "express";
import * as controllers from "../controllers/families.js";

const router = Router();

router.get("/id/", controllers.addIdParameter);
router.get("/", controllers.getFamilies);
router.get("/:familyName", controllers.getFamily);
router.get("/id/:id", controllers.getFamilyById);
router.post("/", controllers.createFamily);
router.put("/edit/:familyName", controllers.updateFamily);
router.delete("/delete/:familyName", controllers.deleteFamily);

export default router;
