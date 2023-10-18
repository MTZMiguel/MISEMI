import React from "react";
import Menu from "../Componentes/Menu";
import SignIn from "../Componentes/SignIn";

function Registro(){
  return (
    
    <div className="container" 
      style={{backgroundColor:'#BBDEFB'}}>
      <Menu/>
      <SignIn/>
    </div>
  );
}

export default Registro;