import { Router } from 'express';
import connectController from './controllers/connect.controller';
import sendMessageController from './controllers/sendMessage.controller';

const router = Router();

router.get("/api", connectController.handle);
router.post("/api/send", sendMessageController.handle);

export { router }