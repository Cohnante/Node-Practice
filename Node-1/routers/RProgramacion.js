const express = require('express')
const app = express()
const {programacion} = require('../db/curso').InforCursos

//router 

const routerProgramacion =express.Router();
app.use("/api/cursos/programacion", routerProgramacion)

routerProgramacion.get('/',(req,res)=>{
  res.send(JSON.stringify(programacion));
})

routerProgramacion.get('/:lenguaje',(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso=>curso.lenguaje===lenguaje)

  if(resultados.length===0){
    return res.status(404).send(`no result cursos of ${lenguaje}`)
  }

  if(req.query.ordenar==="vistas"){
    return res.send(JSON.stringify(resultados.sort((a,b)=>b.vistas -a.vistas)))
  }
  res.send(JSON.stringify(resultados));
  
})

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso=>curso.lenguaje===lenguaje && curso.nivel===nivel)

  if(resultados.length===0){
    return res.status(404).send(`no result cursos of ${lenguaje} and ${nivel}`)
  }

  res.send(JSON.stringify(resultados));
})

module.exports.routerProgramacion = routerProgramacion;