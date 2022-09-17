const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// TODO LIST ANY ROUTERS BELOW

// const apiRouter = require('./routes/api');
const projectRouter = require('./routes/projects');
const userRouter = require('./routes/users');

// parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.resolve(__dirname, '')));

// TODO route handlers
app.use('/projects', projectRouter);
app.use('/users', userRouter);


// TODO get request for Homepage
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// ? if they use react router
// // ? get request for signup/login ?
// app.get('/signup', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, '../client/signup.html'));
// });

// // ? get request for '/projects'
// app.get('/projects', (req, res) => {
//   res.status.sendFile(path.resolve(__dirname, '../index.html'));
// });

// 404
app.use('*', (req, res) => {
  return res.status(404).send('The page you are looking for does not exist.');
});

// default global error object
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'GLOBAL ERROR HANDLER: caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;