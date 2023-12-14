import express from 'express';
import cors from 'cors';
import {rateLimit} from 'express-rate-limit';
import config from 'config';
import {router} from './modules/orgs/routes';

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

app.use(router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});