import React from "react";
import MenuL from "../Componentes/MenuL";
import Profile from "../Componentes/Profile";

function Perfil() {
  return (
    <div className="container" style={{backgroundColor:'#BBDEFB'}}>
      <MenuL/>
      <Profile/>
    </div>
  );
}

export default Perfil;