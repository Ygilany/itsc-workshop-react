import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello ITSC!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});