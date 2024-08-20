import app from './app';

const port = 8100;
const HOST = '0.0.0.0';

const startServer = async () => {
  app.listen(port, () => {
    return console.log(`Express is listening at http://${HOST}:${port}`);
  });
};

startServer();
