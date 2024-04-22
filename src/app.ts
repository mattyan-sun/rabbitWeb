//import express from 'express';
//import mysql from 'mysql';
import { homeRouter } from './routes/home'; //homeRouterをapp.tsから見て相対パスでtop.tsを指定
import { aboutRouter } from './routes/about';
import { attendanceRouter } from './routes/attendance';
import { calendarRouter } from './routes/calendar';
import { movieRouter } from './routes/movie';  
import { bbsRouter } from './routes/bbs';
import { tournamentRouter } from './routes/tournament';
import { othersRouter } from './routes/others';

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;


app.set('view engine', 'ejs'); //ejsファイルを使うことを指定
app.set('views', 'src/views'); //開くejsファイルがある場所を指定

app.use(express.static('public')); //静的ディレクトリを設定

//自分でwebのディレクトリを構成
app.use('/', homeRouter); //homeRouterをwebのルートに指定
app.use('/about', aboutRouter); //aboutRouterをwebのroot/aboutに指定（aboutの名前は.ejsで各hrefの名前と一致していればよい）
app.use('/calendar', calendarRouter); 
app.use('/attendance', attendanceRouter); 
app.use('/movie', movieRouter);
app.use('/bbs', bbsRouter);
app.use('/tournament', tournamentRouter);
app.use('/others', othersRouter);
//
const con = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password'
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

