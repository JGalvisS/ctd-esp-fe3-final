import React, { useState } from "react";
import Sent from "./Sent";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  //*state de los datos de mi paciemte 
  const[paciente, setPaciente] = useState({
    nombre: '',
    email: '',
    solicitud: ''
  })
  //*States para validaciones correctas e incorrectas 
  const[show, setShow]= useState(false)
  const[error, setError]= useState(false)
  
  //*Este es el manejo del submit del form  
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(paciente.nombre.length>3 && paciente.nombre != null&&
      paciente.email.length>8 && paciente.email != null && !paciente.email.includes(' ')&&
      paciente.solicitud.length>20 && paciente.solicitud != null ){
        setShow(true)
        setError(false)
      }else{setError(true)}
  }

  return (
    <div>
      {show === false &&
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value = {paciente.nombre} onChange={(e)=> {setPaciente({...paciente, nombre: e.target.value.trimStart()})}} />
        <label>Email</label>
        <input type="email"value = {paciente.email} onChange={(e)=> {setPaciente({...paciente, email: e.target.value.trimStart()})}} />
        <label htmlFor="story">Solicitud</label>
        <textarea name="story" id="story" cols="30" rows="10" value= {paciente.solicitud} onChange={(e)=> {setPaciente({...paciente, solicitud: e.target.value.trimStart()})}}></textarea>
        <br />
        <button className="favButton">Enviar</button>
      </form>
      }
      {show ?
      <Sent nombre= {paciente.nombre} email= {paciente.email} />
      :
      null
      }
      {error && <h4>Verifica que los datos sean correctos</h4>}

    </div>
  );
};

export default Form;
