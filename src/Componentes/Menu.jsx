import React from "react";
import '../Estilo/Estilos.css'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header" style={{backgroundColor:'#BBDEFB'}}>
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg.bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor:'#90CAF9'}}>
          <Link className="navbar-brand" to="/"><h style={{color:'WHITE',fontSize:30}}><strong>LA SALLE</strong></h></Link>
          <button className="navbar-toggler" style={{backgroundColor:'white',borderColor:"#bbdefb"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registro">Registro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cursos">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/login">Iniciar Sesion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{backgroundColor:"#BBDEFB"}}>
         <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" style={{backgroundColor:"white",color:"black",borderColor:"#bbdefb"}}>Buscar
              </button>
          </form>
      </div>
      <div className="p-3">
        <div className="card" style={{backgroundColor:'#BBDEFB'}}>
          <div className="card-header" style={{backgroundColor:'#90CAF9'}}>
            <h className="Bienvenido" 
             style={{color:"",fontSize:20}}><strong>BIENVENIDOS</strong>
           </h>
          </div>
          <div className="card-body" style={{backgroundColor:'#E3F3F3'}}>
            <h5>La Salle Campoamor</h5>
            <p className="card-text" style={{fontSize:12}}><strong>100%</strong> De los estudiantes, se graduan de 11.</p>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Menu;
