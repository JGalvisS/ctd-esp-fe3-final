import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  
  return (
    <div className="contact">
      <h2>¿Quieres conocer más sobre nosotros?</h2>
      <p>Envianos tus preguntas y nosotros te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact