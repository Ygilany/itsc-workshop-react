import express from 'express';
import { database } from './database';
import cors from 'cors';
import {rateLimit} from 'express-rate-limit';
import config from 'config'

const app = express();
const port = config.get(`port`) as number; //

const rateLimitOptions = {
  windowMs: config.get(`rate_limit.windowMs`), // 15 minutes
  max: config.get(`rate_limit.max`) // limit each IP to 100 requests per windowMs
};

app.use(
  cors({origin: '*'}),
  express.urlencoded({ extended: true }),
  express.json(),
  rateLimit(rateLimitOptions)
);

app.get('/institution', (req, res) => {
  res.status(200).json(database);
})

app.get('/institution/:institution', (req, res) => {
   const institution = req.params.institution;

  if (!database[institution]) {
    return res.status(404).json({ error: 'institution not found' });
  }
  res.status(200).json(database[institution]);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});