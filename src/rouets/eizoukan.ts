import express from 'express';

export const eizoukanRouter = express.Router(); //topRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
eizoukanRouter.get('/', (req, res) => {
  res.render('eizoukan/top');
  console.log(`top.ts`);
});