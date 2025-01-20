import express from 'express'
import cors from 'cors'
import fs from 'fs'
import * as cheerio from 'cheerio';

const app = express()

app.use(express.json())
app.use(cors())

const fileContent1 =  fs.readFileSync('./text.html')
const fileContent2 =  fs.readFileSync('./text2.html')


app.get('/api1',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent1)
})

app.post('/api1',(req,res)=>{
    const {changeContent} = req.body
    console.log(changeContent)
    const $ = cheerio.load(changeContent)

const y =   $('h2.title').text()
  console.log(y)

  const x =   $('p.content').text()
  console.log(x)



})

app.get('/api2',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent2)


})

app.post('/api2',(req,res)=>{
    const {changeContent} = req.body
    console.log(changeContent)
    const $ = cheerio.load(changeContent)



const y =   $('h2.title').text()
  console.log(y)

  const x =   $('p.content').text()
  console.log(x)



})






app.listen(3000,()=>{
    console.log("Server is running")
})