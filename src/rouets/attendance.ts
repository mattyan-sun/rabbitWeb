import express from 'express';

export const attendanceRouter = express.Router(); //topRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
attendanceRouter.get('/', (req, res) => {
  res.render('attendance/login');
  console.log(`attendance.ts`);
});