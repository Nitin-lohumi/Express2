import express from 'express'
import bodyParser from 'body-parser';
import chalk from 'chalk';
const app = express();
app.use(bodyParser.urlencoded())
app.post('/home',(req,res)=>{
  res.send("your  name is " + req.body.name);
})
app.listen(3000,()=>{
  console.log(chalk.white.bgGreen.bold("server is running in port number")+ chalk.green(" 3000"))
});