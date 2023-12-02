import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favorito, dispatch}=useContextGlobal()

  return (
    <>
      <h1>Desntistas Favoritos</h1>
      <button onClick={()=>dispatch({type:'DELETE_FAVS'} )} className="favButton">Elminar favoritos</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favorito.map(fav => <Card dentist={fav} key={fav.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
