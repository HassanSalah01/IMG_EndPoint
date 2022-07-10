import express from 'express';
import image from './api/image';
import placeholder from './api/placeholder';

const router = express.Router();

router.get('/', (req, res) => {
  res.send();
});
router.use('/image', image);
router.use('/placeholder', placeholder);

export default router;
