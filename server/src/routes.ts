import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const router = Router();
const classesController = new ClassesController();

router.get('/classes', classesController.index);
router.post('/classes', classesController.create);

const connectionsController = new ConnectionsController();

router.get('/connections', connectionsController.index);
router.post('/connections', connectionsController.create);

export default router;
