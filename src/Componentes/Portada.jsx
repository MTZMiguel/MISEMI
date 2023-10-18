import React from "react";
import { Link } from "react-router-dom";
import Carro from "../Imagenes/Carro.jpg";


function Portada() {
  return (
    <div className="container">
      <div className="p-4"></div>
      <div className="row">
        <img src={Carro} alt="logo" className="mx-auto" style={{ maxWidth: "500px" }} />
        <div className="p-3"></div>
        <div className="mx-auto">
          <p className="text-center" style={{fontSize:15}}>Registrate como Estudiante de la Salle campo amor y enlistate en esta aventura como bachiller</p>
        </div>
<div className="p-4"></div>
        <Link to='/login' >
           <div className="d-grid gap-2 col-7 mx-auto pb-2">
           <button className="btn btn-primary" 
             type="button" 
             style={{backgroundColor:"#90CAF9",borderColor:"#90CAF9"}}>
             <h className="IniciarSesion" 
               style={{fontSize:15}}><strong>INICIAR SESIÓN</strong></h>
           </button>
          </div>
         </Link>

        <Link to='registro' >
           <div className="d-grid gap-2 col-7 mx-auto" >
           <button className="btn btn-primary" 
             type="button" 
             style={{backgroundColor:"#90CAF9",borderColor:"#90CAF9"}}>
             <h className="Registro" 
               style={{fontSize:15}}><strong>REGISTRARSE</strong>
             </h>
           </button>
              <div className="p-3">
              </div>
          </div>
         </Link>
        
      </div>
      
    </div>
  );
}

export default Portada;