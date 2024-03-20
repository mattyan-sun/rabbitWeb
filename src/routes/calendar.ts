import express from 'express';

export const calendarRouter = express.Router(); //homeRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
calendarRouter.get('/', (req, res) => {
  res.render('calendar/top');
  console.log(`calendar/top.ts`);
});