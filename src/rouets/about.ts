import express from 'express';

export const aboutRouter = express.Router(); //topRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
aboutRouter.get('/', (req, res) => {
  res.render('home/about');
  console.log(`about.ts`);
});