import React from "react";
import '../Estilo/Estilos.css';
import { Link } from "react-router-dom";

function MenuL() {
  return (
<div className="header">
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg.bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor:'#90CAF9'}}>
          <Link className="navbar-brand" to="/HomeL"><h style={{color:'WHITE',fontSize:30}}><strong>LA SALLE</strong></h></Link>
          <button className="navbar-toggler" style={{backgroundColor:'white',borderColor:"#bbdefb"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/HomeL">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Perfil">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/CursosL">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/MisCursos">Mis Cursos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/">Cerrar Sesion</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{backgroundColor:"#BBDEFB"}}>
         <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" style={{backgroundColor:"white",color:"black",borderColor:"#bbdefb"}}>Search</button>
          </form>
      </div>
  <div className="p-3"></div>
    </div>
  );
}

export default MenuL;