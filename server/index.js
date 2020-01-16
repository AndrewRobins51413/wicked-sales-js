
require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/products/', (req, res, next) => {
  const sqlGet = 'select "productId", "name", "price", "image", "shortDescription" from "products" ';
  db.query(sqlGet)

    .then(result => res.json(result.rows)) // drop the array index so the whole array will req/res

    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const parsedID = parseInt(req.params.productId);
  if (isNaN(parsedID)) {
    next(new ClientError('invalid data type', 400));
  }
  const sqlGetAll = `select "productId",  
  "name", 
  "price", 
  "image", 
  "shortDescription", 
  "longDescription" 
  from "products" 
  where "productId" = $1`; // $1 is a security measure read as "use the first parameter" also, first item in params array
  const params = [req.params.productId];

  db.query(sqlGetAll, params)

    .then(result => {
      if (result.rows.length === 0) {
        next(new ClientError('cannot find data', 404));
      } // array of length zero, not a productId of zero, so there's no index
      res.json(result.rows[0]);
    })

    .catch(err => next(err)
    );
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
