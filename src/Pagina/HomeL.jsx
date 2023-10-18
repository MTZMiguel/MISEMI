import React from "react";
import MenuL from '../Componentes/MenuL'
import InicioL from '../Componentes/InicioL';
import PieDePagina from "../Componentes/PieDePagina";

function HomeL() {
  return (
    <div className="container" style={{backgroundColor:'#BBDEFB'}}>
      <MenuL/>
      <InicioL/>
      <PieDePagina/>
    </div>
  );
}

export default HomeL;