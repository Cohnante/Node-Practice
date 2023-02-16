const express = require('express')
const app = express()
const port = 3000

const {InforCursos} = require('./db/curso')
const { routerMatematicas} = require('./routers/RMatematicas')
const {routerProgramacion} = require('./routers/RProgramacion.js')


//router 
app.use("/api/cursos/matematicas", routerMatematicas)
app.use("/api/cursos/programacion", routerProgramacion)

// Routing
app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
})

app.get('/',(req,res)=>{
  res.send("Hi")
})

app.get('/api/cursos',(req,res)=>{
  res.send(JSON.stringify(InforCursos));
})