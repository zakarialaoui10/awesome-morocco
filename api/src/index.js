import path from "path";
import fs from "fs";
import { marked } from "marked";
import { JSDOM } from 'jsdom';
import { extractData , get_Blogs , get_open_source} from "./utils/extract_data.js";

const ROOT = path.join(process.cwd(),'../readme.md');
const TARGET = path.join(process.cwd(),"../articles");
const readme=fs.readFileSync(ROOT,"utf-8")
const document=new JSDOM(marked.parse(readme)).window.document
  
const Communities = extractData(document , 1);
const Events = extractData(document , 2);
const Podcasts = extractData(document , 4);
const Youtube = extractData(document , 5);
const Books = extractData(document , 6);
const Blogs=get_Blogs(document);
const Open_Source_Projects = get_open_source(document);


const data={
    Communities,
    Events,
    Podcasts,
    Youtube,
    Books,
    Blogs,
    //Open_Source_Projects
}


console.log(Open_Source_Projects)