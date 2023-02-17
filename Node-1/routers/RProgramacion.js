const express = require('express')
const app = express()
const {programacion} = require('../db/curso').InforCursos

//router 

const routerProgramacion =express.Router();
app.use("/api/cursos/programacion", routerProgramacion)
routerProgramacion.use(express.json())

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

routerProgramacion.post('/',(req,res)=>{
  let BodyNew = req.body;
  programacion.push(BodyNew)
  res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id',(req,res)=>{
  const UpdateBody = req.body;
  const id = req.params.id;

  const index = programacion.findIndex(curso => curso.id == id)

 if(index>=0){
  programacion[index]=UpdateBody;
 } 
 res.send(JSON.stringify(programacion));

})

routerProgramacion.patch('/:id',(req,res)=>{
  const InfoBody = req.body;
  const id = req.params.id;

  const index = programacion.findIndex(curso => curso.id == id)

  if(index>=0){
    const CursoModi = programacion[index];
    Object.assign(CursoModi,InfoBody);
  }

  res.send(JSON.stringify(programacion))
})

routerProgramacion.delete('/:id',(req,res)=>{
  const id = req.params.id;

  const Index = programacion.findIndex(curso => curso.id ==id);

  if(Index>=0){
    programacion.splice(Index,1);
  }

  res.send(JSON.stringify(programacion))
})

module.exports.routerProgramacion = routerProgramacion;