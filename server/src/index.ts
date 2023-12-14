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
  console.log(`my params are`, req.params);
  console.log(`my query is`, req.query);
  const myInfo = req.query;
  console.log(`my name is, ${JSON.stringify(myInfo)}`);
  console.log(`my name is`, myInfo);

  console.log(`my name is ${req.query.name} and my age is ${req.query.age}`);

  const institution = req.params.institution;

  if (!database[institution]) {
    return res.status(404).json({ error: 'institution not found' });
  }
  res.status(200).json(database[institution]);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});