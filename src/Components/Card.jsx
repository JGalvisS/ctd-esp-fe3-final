import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {

  const {favorito, dispatch} = useContextGlobal()

  const findFav = favorito.find((favorito) => favorito.id === dentist.id)

  const addFav = () => {
     // Aqui iria la logica para agregar la Card en el localStorage
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: dentist})
    }
  }

  
  return (
    <div className="card">
      <Link to={'/detail/'+ dentist.id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="img-card" src="/images/doctor.jpg" alt="imagen dentist" />
        <h3>{dentist.name}</h3>
        <br />
        <p>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */} 
      </Link>
      <button onClick={addFav} className="favButton">{findFav ? '🌟' : '⭐'}</button>
      
    </div>
  );
};

export default Card;
