import app from '../index';
// import { isCreated } from '../middleware/createDir';
import supertest from 'supertest';
// import { arrCheck } from '../middleware/placeValidation';
import { arrCheck, isCreated, resizeImage } from '../Utilities/utilities';
import { direName } from '../modules/path';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
  it('confirm the api/image/file ', async () => {
    const response = await request.get(
      '/api/image?filename=santamonica&width=220&height=200'
    );
    expect(response.status).toBe(200);
  });
});

it('expect isCreated() to be true if file Created', () => {
  expect(isCreated()).toBeTruthy;
});

it('expect arrCheck(pictureName,arr) to return true if The picture is availble', () => {
  expect(arrCheck('santamonica')).toBeTruthy;
});
it('expects resizeImage(filePath,width,height,NewPath) To equal true if the image is succsefully resized and Send to the New Thumbnail location ', async () => {
  const result = await resizeImage(
    `${direName}/images/fjord.jpg`,
    200,
    200,
    `${direName}/images/thumbnail/fjord.jpg`
  );
  expect(result).toBeTruthy;
});
