import express from 'express'
import bodyParser from 'body-parser';
import chalk from 'chalk';
import path from 'path';
import * as url from "url";
const directoryUrl = new URL(".", import.meta.url);
const directoryPath = url.fileURLToPath(directoryUrl);
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set("view engine","ejs");
app.use(express.static(path.join(directoryPath,'public')));//use for front End
app.get('/',(req,res)=>{
  res.render("index");  
})
app.get('/:name',(req,res)=>{
  res.send("name is "+ req.params.name)
})
app.listen(3000,()=>{
  console.log(chalk.bgGreen.bold("server is running in port number")+ chalk.green(" 3000"))
});