import express from 'express';

export const bbsRouter = express.Router(); //topRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
bbsRouter.get('/', (req, res) => {
  res.render('bbs/top');
  console.log(`top.ts`);
});