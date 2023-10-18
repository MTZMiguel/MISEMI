import React from "react";
import Menu from "../Componentes/Menu";
import Portada from "../Componentes/Portada";
import PieDePagina from "../Componentes/PieDePagina";


function Inicio(){
  return (
    
    <div className='container' 
      style={{backgroundColor:'#BBDEFB'}}>
      <div className="Inicio">
        <Menu/>
        <Portada/>
        <PieDePagina/>
      </div>
    </div>
  );
}

export default Inicio;