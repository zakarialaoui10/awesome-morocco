import path from "path";
import fs from "fs";
import express from 'express';
const app = express();
const port = 3000;
const DATA_PATH = path.join(process.cwd(),"./data/data.json");
const DATA_STRING = fs.readFileSync(DATA_PATH,"utf-8");
const DATA = JSON.parse(DATA_STRING);
console.log(DATA.Communities)

app.get('/', (req, res) => {
    res.send(DATA_STRING);
  });
  
  // Start the server
app.listen(port, () => {
    console.log(`127.0.0.1:${port}`);
  });