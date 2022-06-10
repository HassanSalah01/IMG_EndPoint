import { Request, Response } from 'express';
import fs from 'fs-extra';
import { direName } from '../modules/path';
/* eslint-disable @typescript-eslint/ban-types */
export const isPresent = async (
  req: Request,
  res: Response,
  next: Function
): Promise<void> => {
  const imgArr: string[] = [
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
  ];
  // const filePath = `${direName}/images/${req.query.filename as string}.jpg`;
  const fileName = req.query.filename as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const thumbPath = `${direName}/images/thumbnail/${fileName}_${width}_${height}.jpg`;
  let present = false;
  let exists: boolean;
  for (const x of imgArr) {
    if (x == fileName) {
      present = true;
    }
  }
  if (present) {
    exists = await fs.pathExists(thumbPath);
    if (exists) {
      res.sendFile(thumbPath);
    } else {
      next();
    }
  } else {
    return res.status(404).sendFile(direName + '/src/html/error.html');
  }
};
