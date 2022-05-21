import { Router } from 'express';
import connectController from './controllers/connectController';

const router = Router();

router.get("/api", connectController.handle);

export { router }