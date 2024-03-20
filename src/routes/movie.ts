import express from 'express';

export const movieRouter = express.Router(); //topRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
movieRouter.get('/', (req, res) => {
  res.render('movie/top');
  console.log(`movie/top.ts`);
});