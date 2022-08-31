import fs from 'fs-extra';
import sharp from 'sharp';
import { Response } from 'express';
// import { isCreated } from '../middleware/createDir';

export const createDi = async (directory: string): Promise<boolean> => {
  //1
  let isCreated: boolean;
  isCreated = false;
  try {
    await fs.ensureDir(directory);
    isCreated = true;
  } catch (err) {
    isCreated = false;
    console.error(err);
  }
  return isCreated;
};

export const isCreated = (): boolean => {
  return true;
};
/////////////////////////////////////////////////////////////////////
export const resizeImage = async (
  //2
  imgPath: string,
  width: number,
  height: number,
  thumPath: string
): Promise<boolean> => {
  // let isResize: boolean = true;
  // /* eslint-disable @typescript-eslint/ban-types */
  let x: string;
  try {
    await sharp(imgPath)
      .resize({
        width: width,
        height: height,
      })
      .toFile(thumPath);
    x = 'resized';
  } catch (error) {
    x = 'Error';
    console.log(error);
  }
  if (x == 'resized') {
    return true;
  } else {
    return false;
  }
};
export const tt = async (
  fp: string,
  wi: number,
  he: number,
  tp: string,
  gg: string,
  rr: Response
): Promise<boolean> => {
  await resizeImage(fp, wi, he, tp);
  await rr.sendFile(gg);
  return true;
};
export const arrCheck = (name: string): boolean => {
  const imgArr: string[] = [
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
  ];
  let ishere = false;
  for (const i of imgArr) {
    if (i === name) {
      ishere = true;
      break;
    } else {
      ishere = false;
    }
  }
  return ishere;
};
export const grabImage = async (gg: string, re: Response): Promise<void> => {
  await re.sendFile(gg);
};
