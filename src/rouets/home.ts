import express from 'express';

export const homeRouter = express.Router(); //topRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
homeRouter.get('/', (req, res) => {
  res.render('home/top');
  console.log(`top.ts`);
});