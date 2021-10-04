const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/content',express.static(path.resolve(__dirname,'..', 'indianstocks_pages','content')));

app.use('/charts',express.static(path.resolve(__dirname,'..', 'extraction','charts')));

const PORT = 4000;

app.listen(PORT,()=>{
  console.log(`biginvest content server is listening on port ${PORT}`);
});
