import express from 'express';
import { database } from './database';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(
  cors({origin: '*'}),
  express.urlencoded({ extended: true }),
  express.json()
);

app.get('/institution/:institution', (req, res) => {
  const institution = req.params.institution;
  console.log(institution)
  res.status(200).json(database[institution]);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});