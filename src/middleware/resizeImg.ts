import express from 'express';
import { direName } from '../modules/path';
import { tt } from '../Utilities/utilities';

/* eslint-disable @typescript-eslint/ban-types */
export const resizeImg = (
  req: express.Request,
  res: express.Response
): express.Response => {
  try {
    const filePath = `${direName}/images/${req.query.filename as string}.jpg`;
    const fileName = req.query.filename as string;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const thumbPath = `${direName}/images/thumbnail/${fileName}_${width}_${height}.jpg`;
    tt(filePath, width, height, thumbPath, thumbPath, res);
  } catch {
    return res.status(404);
  }
  return res.status(200);
};
