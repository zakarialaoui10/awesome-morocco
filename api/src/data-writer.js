import path from "path";
import fs from "fs";
import { marked } from "marked";
import { JSDOM } from 'jsdom';
import get_data from "./data-extracter.js";

const ROOT = path.join(process.cwd(),'../readme.md');
const TARGET = path.join(process.cwd(),"./data/data.json");
console.log(TARGET)
const readme=fs.readFileSync(ROOT,"utf-8")
const document=new JSDOM(marked.parse(readme)).window.document
  


const data=get_data(document)
fs.writeFileSync(TARGET,JSON.stringify(data,null,2))

//console.log(data)