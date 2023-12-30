/*import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
// app.ts
import express from 'express';
import { topRouter } from './top';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', topRouter);

/*app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

