import Rol from '../models/roles.model'

export const CreateRols = async ()=>{
  
    const count = await Rol.estimatedDocumentCount()

    if(count>0) return;

    const value = await Promise.all([
      new Rol({name:'User'}).save(),
      new Rol({name:'Moderator'}).save(),
      new Rol({name:'Administrator'}).save()
    ])
    
    console.log(value);
}