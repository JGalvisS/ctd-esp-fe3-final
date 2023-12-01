import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import {reducer} from"./reducer"


const initialState = { 
  list: [],
  dentistDetail: [],
  favorito:  JSON.parse(localStorage.getItem('favorito')) || [],
  theme: "light"
}

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch]= useReducer(reducer,initialState)
  const {list, favorito,theme} = state
  console.log(state)
  
  const url = "https://jsonplaceholder.typicode.com/users"
 // useEffect(()=>{
   // axios(url)
    //.then(res=>console.log(res.data) )
  //},[])
  useEffect(()=>{
    axios(url)
    .then(res=>dispatch({type:'GET_DENTISTS', payload: res.data}) )
  },[])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favorito))
}, [state.favorito])

  return (
    <ContextGlobal.Provider value={{theme,list,favorito,state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider

export const useContextGlobal = ()=>useContext(ContextGlobal)
