import React, { useState } from "react";
import Sent from "./Sent";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  //*state de los datos de mi paciemte 
  const[paciente, setPaciente] = useState({
    nombre: '',
    email: '',
    contrasena: ''
  })
  //*States para validaciones correctas e incorrectas 
  const[show, setShow]= useState(false)
  const[error, setError]= useState(false)
  
  //*Este es el manejo del submit del form  
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(paciente.nombre.length>3 && paciente.nombre != null&&
      paciente.email.length>8 && paciente.email != null && !paciente.email.includes(' ')&&
      paciente.contrasena.length>6 && paciente.contrasena != null && !paciente.contrasena.includes(' ')){
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
        <label >Contraseña</label>
        <input type="password" value = {paciente.contrasena} onChange={(e)=> {setPaciente({...paciente, contrasena: e.target.value.trimStart()})}}/>
        <br />
        <button>Enviar</button>
      </form>
      }
      {show ?
      <Sent nombre= {paciente.nombre} email= {paciente.email} />
      :
      null
      }
      {error && <h5>Verifica que los datos sean correctos</h5>}

    </div>
  );
};

export default Form;
