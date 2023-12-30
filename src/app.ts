import express from 'express';
import { homeRouter } from './rouets/home'; //topRouterをapp.tsから見て相対パスでtop.tsを指定
import { attendanceRouter } from './rouets/attendance';
import { aboutRouter } from './rouets/about';
import { eizoukanRouter } from './rouets/eizoukan';  
import { bbsRouter } from './rouets/bbs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); //ejsファイルを使うことを指定
app.set('views', './src/views'); //開くejsファイルがある場所を指定

//自分でwebのディレクトリを構成
app.use('/', homeRouter); //topRouterをwebのルートに指定
app.use('/about', aboutRouter); //aboutRouterをwebのroot/aboutに指定（aboutの名前は.ejsで各hrefの名前と一致していればよい）
app.use('/attendance', attendanceRouter); 
app.use('/eizoukan', eizoukanRouter);
app.use('/bbs', bbsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

