import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import ConnectionsController from './controllers/ConnectionsController'
import PointsController from './controllers/PointsController'

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const connectionsController = new ConnectionsController();

routes.post('/points', upload.single('image'), pointsController.create);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;