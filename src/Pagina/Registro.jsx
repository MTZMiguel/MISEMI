import React from "react";
import Menu from "../Componentes/Menu";
import SignIn from "../Componentes/SignIn";
import FormularioRegistro from "../Componentes/FormularioRegistro";

function Registro(){
  return (
    
    <div className="container" 
      style={{backgroundColor:'#BBDEFB'}}>
      <Menu/>
      <FormularioRegistro/>
    </div>
  );
}

export default Registro;