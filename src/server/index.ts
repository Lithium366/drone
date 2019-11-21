import express from 'express';
import compression from 'compression';
import ssr from './middlewares/ssr';

const app: express.Application = express();

app.use(compression());
app.use(express.static('dist/client'));
app.use(express.static('static'));
app.use('/favicon.ico', ssr);
app.use('/*', ssr);

app.listen(3000, function() {
  console.log('Example app listening on port 3000! Wave');
});
