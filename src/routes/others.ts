import express from 'express';

export const othersRouter = express.Router(); //homeRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
othersRouter.get('/', (req, res) => {
  res.render('others/top');
  console.log(`others/top.ts`);
});