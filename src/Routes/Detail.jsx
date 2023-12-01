import React, { useEffect } from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const{state,dispatch}=useContextGlobal()
  const params= useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    useEffect(()=>{
    axios(url)
    .then(res=>console.log(res.data) )

  },[])
  useEffect(()=>{
    axios(url)
    .then(res=>dispatch({type:'GET_DENTIST', payload: res.data}))
  },[])

  
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        <h3> {state.dentistDetail.name}</h3>
        <img src="/images/doctor.jpg" alt="imagen dentist" />
        <p>Nombre de usuario: {state.dentistDetail.username}</p>
        <p>Email: {state.dentistDetail.email}</p>
        <p>Telefono: {state.dentistDetail.phone}</p>
        <p>Sitio Web: {state.dentistDetail.website}</p>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail