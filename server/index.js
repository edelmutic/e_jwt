const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
