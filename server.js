const mongoose = require('mongoose');

const app = require('./app');

const DB = 'mongodb://localhost:27017/getsbuy';

const server = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'))
  .catch(() => console.log('Could not connected to DB!'));

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLER REJECTION!  Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
