/// <reference path="../express-request.d.ts" />

import { corsHandler } from '@middlewares/cors-handler';
import { globalErrorHandler } from '@middlewares/global-error-handler';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(corsHandler);
app.use(bodyParser.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ** The global error handling must be the last app.use() declaration **
app.use(globalErrorHandler);

export default app;
