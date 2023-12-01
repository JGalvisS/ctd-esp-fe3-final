import React from 'react'

const Sent = ({nombre, email}) => {
  return (
    <div>
        <h3>Perfecto, {nombre}</h3>
        <h3>tu email {email} ha sido registrado correctamente</h3>
    </div>
  )
}

export default Sent