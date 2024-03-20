import express from 'express';

export const tournamentRouter = express.Router(); //homeRouterを作成してapp.tsにexportする

//app.tsで定義されたtopRouterの場所にgetメソッドでアクセスしたら、views/top.ejsを表示する
tournamentRouter.get('/', (req, res) => {
  res.render('tournament/top');
  console.log(`tournament/top.ts`);
});