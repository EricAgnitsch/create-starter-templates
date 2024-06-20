import { corsHandler } from '@middlewares/cors-handler';
import { globalErrorHandler } from '@middlewares/global-error-handler';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 8100;

app.use(corsHandler);
app.use(bodyParser.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ** The global error handling must be the last app.use() declaration **
app.use(globalErrorHandler);

app.listen(port, () => {
  return console.log(`Express is listening on port ${port}`);
});
