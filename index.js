const express = require('express');
const app = express();
const cors = require("cors");

corsOptions = { origin: true }
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}! V3 👋`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
