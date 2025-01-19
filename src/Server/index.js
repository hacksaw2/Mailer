import express from 'express'
import cors from 'cors'
import fs from 'fs'
// import path from 'path'

const app = express()

app.use(express.json())
app.use(cors())

const fileContent1 =  fs.readFileSync('./text.html')
const fileContent2 =  fs.readFileSync('./text2.html')

// const filePath = path.resolve(__dirname, '../src/text.html');
// const fileContent = fs.readFileSync(filePath, 'utf-8');

app.get('/api1',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent1)
})

app.post('/api1',(req,res)=>{
    const {content} = req.body
    console.log(content)



})

app.get('/api2',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent2)
})

// app.get('/api',(req,res)=>{

//     const dynamicHTML = 
//     `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Simple Webpage</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f4f4f4;
//         }
//         header {
//             background-color: #007BFF;
//             color: white;
//             text-align: center;
//             padding: 1rem 0;
//         }
//         main {
//             padding: 20px;
//             text-align: center;
//         }
//         footer {
//             background-color: #333;
//             color: white;
//             text-align: center;
//             padding: 10px 0;
//             position: fixed;
//             bottom: 0;
//             width: 100%;
//         }
//         a {
//             color: #007BFF;
//             text-decoration: none;
//         }
//         a:hover {
//             text-decoration: underline;
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <h1>Title</h1>
//     </header>
//     <main>
//         <h2>About Me</h2>
//         <p>Hello! I'm learning web development and this is my first webpage.</p>
//         <p>Feel free to connect with me on <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>.</p>
//     </main>
//     <footer>
//         <p>&copy; 2025 My Simple Webpage</p>
//     </footer>
// </body>
// </html>

//     `
//     res.send(dynamicHTML)
    

// })



app.listen(3000,()=>{
    console.log("Server is running")
})