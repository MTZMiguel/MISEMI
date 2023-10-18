import React from "react";
import { Link } from "react-router-dom";
import Carro from "../Imagenes/Carro.jpg";


function Inicio() {
  return (
    <div className="container">
      <div className="row">
        
        <img src={Carro} alt="logo" className="mx-auto" style={{ maxWidth: "500px" }}/>
      </div>
    </div>
  );
}
        
export default Inicio;