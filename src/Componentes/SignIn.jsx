import React from "react";
import { Link } from "react-router-dom";

function SingIn() {
  return (
    <div className="container">
      <div className="row">
        <div className="container">
          <div className="mx-auto">
            <div class="card" style={{borderColor:"#BBDEFB"}}>
              <div class="card-header text-center" style={{backgroundColor:"#90CAF9"}}>
                <h1><strong>Registrarse</strong></h1>
              </div>
              
              <div class="card-body" style={{backgroundColor:"#E3F3F3"}}>
                <form action="/HomeL" method="get">
                  <div className="col-md-6 p-2">
                <label htmlFor="inputEmail4" className="form-label"><h5>Nombre</h5></label>
                <input type="text" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-6 p-2">
                <label htmlFor="inputPassword4" className="form-label"><h5>Apellido</h5></label>
                <input type="text" className="form-control" id="inputPassword4"/>
              </div>
              <div className="col-12 p-2">
                <label htmlFor="inputAddress" className="form-label"><h5>Correo</h5></label>
                <input type="email" className="form-control" id="inputAddress"/>
              </div>
              <div className="col-12 p-2">
                <label htmlFor="inputAddress2" className="form-label"><h5>Contraseña</h5></label>
                <input type="password" className="form-control" id="inputAddress2"/>
              </div>
              <div className="col-md-6 p-2">
                <label htmlFor="inputCity" className="form-label"><h5>Ciudad</h5></label>
                <input type="text" className="form-control" id="inputCity"/>
              </div>
              <div className="col-md-4 p-2">
                <label htmlFor="inputState" className="form-label"><h5>Departamento</h5></label>
                
                
                <select id="inputState" className="form-select" defaultValue="Antioquia">
                  <option value="Antioquia">Antioquia</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Atlantico">Atlantico</option>
                  <option value="Magdalena">Magdalena</option>
                  <option value="Santander">Santander</option>
                </select>
              </div>
              
              
              <div className="col-md-2 p-2">
                <label htmlFor="input" className="form-label"><h5>Ocupacion</h5></label>
                <input type="text" className="form-control" id="input"/>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" htmlFor="gridCheck">
                    Aceptar terminos y condiciones
                  </label>
                </div>
              </div>
              <div className="col-12 p-3">
                <button type="submit" className="btn btn-primary">Registrarme</button>
              </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default SingIn;
