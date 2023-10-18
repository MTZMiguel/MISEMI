import React from "react";
import { Link } from "react-router-dom";
import Carro from "../Imagenes/Carro.jpg";


function Init() {
  return (
    <div className="container">
      <div className="row">
        
        <img src={Carro} alt="logo" className="mx-auto p-4" style={{ maxWidth: "500px" }}/>

        <div className="container">
          <div className="mx-auto">
            <div class="card">
              <div class="card-header text-center" style={{backgroundColor:"#90CAF9"}}>
                <h1><strong>Iniciar Sesión</strong></h1>
              </div>
              
              <div class="card-body" style={{backgroundColor:"#E3F3F3"}}>
                <form action="/HomeL" method="get">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"><h5>Correo Electronico </h5></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">Este correo no se compartira con nadie.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"><h5>Contraseña</h5></label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Confirma que eres tú</label>
                  </div>
                  <button type="submit" class="btn btn-primary ">Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <div class="p-5"/>
        </div>
      </div>
    </div>
  );

}
        
export default Init;