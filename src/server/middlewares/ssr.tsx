import path from 'path';
import React, { ElementType } from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response, NextFunction } from 'express';
import { ChunkExtractor } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/App';

const statsFile = path.resolve(
  __dirname,
  '../../dist/client/loadable-stats.json'
);

const ssr = (req: Request, res: Response, next: NextFunction): void => {
  const context = {};
  const extractor = new ChunkExtractor({ statsFile });

  const jsx = extractor.collectChunks(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );

  const appHTML = renderToString(jsx);

  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="SSR test application" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>Hello React!!!</title>
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
      </head>
      <body>
        <div id="root">${appHTML}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>`);
  next();
};

export default ssr;
