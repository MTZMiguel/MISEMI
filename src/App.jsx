import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pagina/Inicio';
import Cursos from './Pagina/Cursos';
import Login from './Pagina/Login';
import Registro from './Pagina/Registro';
import HomeL from './Pagina/HomeL';
import Perfil from './Pagina/Perfil';
import MisCursos from './Pagina/MisCursos';
import CursosL from './Pagina/CursosL';
import Curso1 from './Pagina/Curso1';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/Cursos' element={<Cursos/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Registro' element={<Registro/>}/>
        <Route exact path='/HomeL' element={<HomeL/>}/>
        <Route exact path='/Perfil' element={<Perfil/>}/>
        <Route exact path='/MisCursos' element={<MisCursos/>}/>
        <Route exact path='/CursosL' element={<CursosL/>}/>
        <Route exact path='/Curso1' element={<Curso1/>}/>

      </Routes>
    </Router>
  )
}

export default App;
