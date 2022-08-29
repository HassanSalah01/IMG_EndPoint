import express from 'express';
const image = express.Router();
import { validation } from '../../middleware/validation';
import { createDir } from '../../middleware/createDir';
import { resizeImg } from '../../middleware/resizeImg';
import { isPresent } from '../../middleware/checkImgCached';

const middleware = [validation, createDir, isPresent, resizeImg];
/* eslint-disable @typescript-eslint/ban-types */
image.get('/', middleware, (req: express.Request, res: express.Response) => {
  console.log(req.query);
  console.log(res.status);
});

export default image;
