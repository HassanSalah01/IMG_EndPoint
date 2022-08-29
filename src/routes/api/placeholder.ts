import express from 'express';
const placeholder = express.Router();
import { placeImageVal } from '../../middleware/placeValidation';

placeholder.get('/', placeImageVal, (req, res) => {
  console.log(req, res);
});

export default placeholder;
