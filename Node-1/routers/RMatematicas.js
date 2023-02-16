const express = require('express');
const app = express();
const {matematicas} = require('../db/curso').InforCursos


// Router
const routerMatematicas =express.Router();
app.use("/api/cursos/matematicas", routerMatematicas)

// Routing


routerMatematicas.get('/',(req,res)=>{
  res.send(JSON.stringify(matematicas));
})

routerMatematicas.get('/:temas',(req,res)=>{
  const temas= req.params.temas;
  const resultados= matematicas.filter(curso=>curso.temas===temas)

  if(resultados.lenght===0){
    return res.status(404).send(`no result cursos of ${temas}`)
  }

  res.send(JSON.stringify(resultados));
})

module.exports.routerMatematicas = routerMatematicas;