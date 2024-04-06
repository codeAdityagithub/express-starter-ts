import { Router } from "express";
import test from "../controllers/testController";

const router = Router();

router.post("/test", test);

export default router;
