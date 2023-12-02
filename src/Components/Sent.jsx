import React from 'react'

const Sent = ({nombre, email}) => {
  return (
    <div>
        <h3>Perfecto, {nombre}</h3>
        <h3>nos podremos en contacto contigo a tu email {email}</h3>
    </div>
  )
}

export default Sent