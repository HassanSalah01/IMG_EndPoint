import express from 'express';
import { direName } from '../modules/path';
import { arrCheck, grabImage } from '../Utilities/utilities';

/* eslint-disable @typescript-eslint/ban-types */
export const placeImageVal = (
  req: express.Request,
  res: express.Response
): void => {
  const fileName = req.query.filename as string;
  if (arrCheck(fileName)) {
    grabImage(`${direName}/images/${fileName}.jpg`, res);
  } else {
    return res.status(404).sendFile(direName + '/src/html/error.html');
  }
};
