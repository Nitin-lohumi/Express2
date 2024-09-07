import { createServer } from 'node:http';
import chalk from 'chalk';
const server  =  createServer((req,res)=>{
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.end(JSON.stringify({greeting:"hello nitin" ,name:"nickkks"}));
})
server.listen(3000,()=>{
  console.log(chalk.white.bgGreen.bold("server is running in port number")+ chalk.green(" 3000"))
});