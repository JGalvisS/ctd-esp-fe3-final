import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, dispatch} = useContextGlobal()

  const handleClick=()=>{
    if(theme==="light"){
      dispatch({type:'CHANGE_THEME', payload: "dark" })
    }if(theme==="dark"){
      dispatch({type:'CHANGE_THEME', payload: "light" })
    }
  }
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={'/'}><h3>Home</h3></Link>
      <Link to={'/contact'}><h3>Contacto</h3></Link>
      <Link to={'/favs'}><h3>Favorito</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleClick}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar