import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import {celebrate, Joi} from 'celebrate'

import ConnectionsController from './controllers/ConnectionsController'
import PointsController from './controllers/PointsController'

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const connectionsController = new ConnectionsController();

routes.post(
  '/points', 
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      date: Joi.string().required(),
      horario: Joi.string().required(),
      state: Joi.string().required(),
      observacao: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    })
  }, {
    abortEarly: false,
  }),
  pointsController.create);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)



export default routes;