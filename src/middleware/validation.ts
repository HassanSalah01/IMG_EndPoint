import express from 'express';
import { direName } from '../modules/path';
/* eslint-disable @typescript-eslint/ban-types */
export const validation = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  if (
    !filename ||
    filename == 'null' ||
    filename == undefined ||
    filename.length < 0
  ) {
    return res.status(404).sendFile(direName + '/src/html/error.html');
  } else if (
    width <= 0 ||
    height <= 0 ||
    width >= 2500 ||
    height >= 1200 ||
    isNaN(width) ||
    isNaN(height)
  ) {
    return res.status(404).sendFile(direName + '/src/html/error2.html');
  } else {
    res.locals = { filename, width, height };
    next();
  }
};
