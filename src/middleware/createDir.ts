//1f
// import fs from 'fs-extra';
import express from 'express';
import { direName } from '../modules/path';
import { createDi, isCreated } from '../Utilities/utilities';
// const createDi = async (directory: string): Promise<void> => {
//   try {
//     await fs.ensureDir(directory);
//   } catch (err) {
//     console.error(err);
//   }
// };
/* eslint-disable @typescript-eslint/ban-types */
export const createDir = (
  req: express.Request,
  res: express.Response,
  next: Function
): express.Response => {
  try {
    createDi(direName + '/images/thumbnail'); //1
    isCreated();
    next();
  } catch {
    return res.status(404);
  }
  return res.status(200);
};
// export const isCreated = (): boolean => {//2
//   return true;
// };
