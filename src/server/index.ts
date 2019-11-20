import express, { Request, Response } from 'express';

const app: express.Application = express();

app.use(express.static('dist/client'));

const html = `
<!DOCTYPE html><html>
<head>
  <meta charset="UTF-8" />
  <title>Hello React!</title>
</head>
<body>
  <div id="root"></div>
  <script src="app.js"></script>
  <script src="vendor.js"></script>
</body>
</html>`;

// Catch all route
app.get('*', (req: Request, res: Response) => {
  res.send(html);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000! Wave');
});
