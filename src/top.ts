import express from 'express';

export const topRouter = express.Router();

topRouter.get('/', (req, res) => {
  res.render('top');
});