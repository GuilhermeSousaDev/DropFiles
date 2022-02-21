import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import FilesController from '../controllers/FilesController';

const filesRouter = Router();
filesRouter.use(isAuthenticated);

const filesController = new FilesController();
const multerConfig = multer();

filesRouter.get(
    '/:filename', 
    celebrate({
        [Segments.PARAMS]: {
            filename: Joi.string().required(),
        }
    }),
    filesController.index,
);

filesRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        }
    }),
    multerConfig.single('file'),
    filesController.create,
);

export default filesRouter;