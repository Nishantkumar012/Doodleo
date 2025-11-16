import { Router } from "express";
import { PermissionController } from "../controllers/permissionController";

const router = Router();
const controller = new PermissionController();

router.post("/", controller.addPermission);
router.get("/:boardId", controller.getPermissions);
router.patch("/:id", controller.updatePermission);
router.delete("/:id", controller.removePermission);

export default router;
