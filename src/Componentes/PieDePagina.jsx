import React from "react";
import Carro from "../Imagenes/Carro.jpg";
import { Link } from "react-router-dom";
import { PiCopyrightBold } from "react-icons/pi"

function PieDePagina () {
  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
          <h2 className="encabeza">Trabaja en la Salle</h2>
          <h5 className="px-5 pb-2">¿Eres docente? Trabaja con nosotros y prepara a los estudiantes en actividades de alta demanda</h5>
        <section>
        <button className="btn btn-primary" 
             type="button" 
             style={{backgroundColor:"#90CAF9",borderColor:"#90CAF9"}}>
             <h className="Registro" 
               style={{fontSize:15}}><strong>Instalar la salle</strong>
             </h>
           </button>
        </section>
          <div id="copyright">
            <hr/>
            <p><small>La Salle <PiCopyrightBold/> Todos los derechos reservados.</small></p>
          </div >
        </div>
      </div>
    </div>
  );
}

export default PieDePagina;