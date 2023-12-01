
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import { useContextGlobal } from './Components/utils/global.context'




function App() {
  const {theme} = useContextGlobal()

  return (

    
    <div className={`App ${theme}`}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
    
  );
}

export default App;
