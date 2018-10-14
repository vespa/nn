const restify = require('restify');
const next = require('next');
const { Router } = require('restify-router');
const data = require('./data/data.json');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const routerInstance = new Router();

routerInstance.get('/api', (req, res, nex) => {
  res.header('content-type', 'json');
  res.send(data);
  nex();
});

/* eslint-disable no-console */
app.prepare().then(() => {
  const server = restify.createServer();
  routerInstance.applyRoutes(server);
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
