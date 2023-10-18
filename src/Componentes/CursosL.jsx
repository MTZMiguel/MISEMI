import React from "react";
import '../Estilo/Estilos.css';
import { Link } from "react-router-dom";
import MAZDA from "../Imagenes/MAZDA.jpg"
import MITSUBISHI from "../Imagenes/MITSUBISHI.jpg"
import SUPRA from "../Imagenes/SUPRA.jpg"
import MUSTANG from "../Imagenes/MUSTANG.jpg"
import NISSAN from "../Imagenes/NISSAN.jpg"

function CursosL() {
  return (
    <div className="row">
      <p className="pd-4"></p>
      <h1 className="text-center fw-bold">
        MIS CURSOS
      </h1>
      <div className="container" 
        style = {{ backgroundColor: '#BBDEFB'}}>
        <div className='p-3'>
          <div class="card">
            <div class="card-header" 
              style = {{backgroundColor:"#90CAF9"}}>
              <h style={{color:'WHITE',fontSize:30}}>
                <strong>CURSO 1</strong>
              </h>
            </div>
            <div class="card-body" 
              style = {{backgroundColor:"#E3F3F3"}}>
              <h5 class="card-title encabezado">
                <h style={{color:'BLACK',fontSize:25}}>
                  <strong>Mitsubishi</strong>
                </h>
              </h5>
              <img src={MITSUBISHI} 
                class="card-img-top p-5" 
                alt="..."/>
              <div class="progress" 
                role="progressbar" 
                aria-label="Animated striped example" 
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                  style={{width: "10%"}}>
                  10%
                </div>
              </div>
              <div className='p-3'></div>
              <h5 class="card-text" 
                style={{fontSize:25}}>
                <strong>Contenido del Curso</strong>
              </h5>
              <h5 class="card-text" 
                style={{fontSize:20}}>
                Conocimientos previos del auto
              </h5>
              <h4 class="card-text" 
                style={{fontSize:16}}>Ejp. Motor , Caballos de Fuerza , Entre Otros
              </h4>
              <hr/>
              <Link to="/Curso1" 
                class="btn btn-primary">
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" 
        style = {{ backgroundColor: '#BBDEFB'}}>
        <div className='p-3'>
          <div class="card">
            <div class="card-header" 
              style = {{backgroundColor:"#90CAF9"}}>
              <h style={{color:'WHITE',fontSize:30}}>
                <strong>CURSO 2</strong>
              </h>
            </div>
            <div class="card-body" 
              style = {{backgroundColor:"#E3F3F3"}}>
              <h5 class="card-title">
                <h style={{color:'BLACK',fontSize:25}}>
                  <strong>Supra</strong>
                </h>
              </h5>
              <img src={SUPRA} 
                class="card-img-top p-5" 
                alt="..."/>
              <div class="progress" 
                role="progressbar" 
                aria-label="Animated striped example" 
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                  style={{width: "20%"}}>
                  20%
                </div>
              </div>
              <div className='p-3'></div>
              <h5 class="card-text" 
                style={{fontSize:25}}>
                <strong>Contenido del Curso</strong>
              </h5>
              <h5 class="card-text" 
                style={{fontSize:20}}>
                Conocimientos previos del auto
              </h5>
              <h4 class="card-text" 
                style={{fontSize:16}}>
                Ejp. Caja de Cambios , Frenos , Entre Otros
              </h4>
              <hr/>
              <Link to="#" 
                class="btn btn-primary">
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" 
        style = {{ backgroundColor: '#BBDEFB'}}>
        <div className='p-3'>
          <div class="card">
            <div class="card-header" 
              style = {{backgroundColor:"#90CAF9"}}>
              <h style={{color:'WHITE',fontSize:30}}>
                <strong>CURSO 3</strong>
              </h>
            </div>
            <div class="card-body" 
              style = {{backgroundColor:"#E3F3F3"}}>
              <h5 class="card-title">
                <h style={{color:'BLACK',fontSize:25}}>
                  <strong>Mustang</strong>
                </h>
              </h5>
              <img src={MUSTANG} 
                class="card-img-top p-5" 
                alt="..."/>
              <div class="progress" 
                role="progressbar" 
                ria-label="Animated striped example" 
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                  style={{width: "30%"}}>
                  30%
                </div>
              </div>
              <div className='p-3'></div>
              <h5 class="card-text"
                style={{fontSize:25}}>
                <strong>Contenido del Curso</strong>
              </h5>
              <h5 class="card-text"
                style={{fontSize:20}}>
                Conocimientos previos del auto
              </h5>
              <h4 class="card-text" 
                style={{fontSize:16}}>
                Ejp. Transmisión , Sistema de Refrigeración , Entre Otros
              </h4>
              <hr/>
              <Link to="#" 
                class="btn btn-primary">
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" 
        style = {{ backgroundColor: '#BBDEFB'}}>
        <div className='p-3'>
          <div class="card">
            <div class="card-header" 
              style = {{backgroundColor:"#90CAF9"}}>
              <h style={{color:'WHITE',fontSize:30}}>
                <strong>CURSO 4</strong>
              </h>
            </div>
            <div class="card-body" 
              style = {{backgroundColor:"#E3F3F3"}}>
              <h5 class="card-title">
                <h style={{color:'BLACK',fontSize:25}}>
                  <strong>Nissan</strong>
                </h>
              </h5>
              <img src={NISSAN} 
                class="card-img-top p-5" 
                alt="..."/>
              <div class="progress" 
                role="progressbar" 
                aria-label="Animated striped example"
                aria-valuenow="75" 
                aria-valuemin="0"
                aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                  style={{width: "40%"}}>
                  40%
                </div>
              </div>
              <div className='p-3'></div>
              <h5 class="card-text" 
                style={{fontSize:25}}>
                <strong>Contenido del Curso</strong>
              </h5>
              <h5 class="card-text" 
                style={{fontSize:20}}>
                Conocimientos previos del auto
              </h5>
              <h4 class="card-text" 
                style={{fontSize:16}}>
                Ejp. Neumaticos , Rines , Entre Otros</h4>
              <hr/>
              <Link to="#" 
                class="btn btn-primary">
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" 
        style = {{ backgroundColor: '#BBDEFB'}}>
        <div className='p-3'>
          <div class="card">
            <div class="card-header" 
              style = {{backgroundColor:"#90CAF9"}}>
              <h style={{color:'WHITE',fontSize:30}}>
                <strong>CURSO 5</strong>
              </h>
            </div>
            <div class="card-body"
              style = {{backgroundColor:"#E3F3F3"}}>
              <h5 class="card-title"
                ><h style={{color:'BLACK',fontSize:25}}>
                  <strong>Mazda RX-7</strong>
                </h>
              </h5>
              <img src={MAZDA} 
                class="card-img-top p-5"
                alt="..."/>
              <div class="progress" 
                role="progressbar" 
                aria-label="Animated striped example" 
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                  style={{width: "50%"}}>
                  50%
                </div>
              </div>
              <div className='p-3'></div>
              <h5 class="card-text" 
                style={{fontSize:25}}>
                <strong>Contenido del Curso</strong>
              </h5>
              <h5 class="card-text" 
                style={{fontSize:20}}>
                Conocimientos previos del auto
              </h5>
              <h4 class="card-text" 
                style={{fontSize:16}}>
                Ejp. Carroceria , Sistema Hidraulico , Entre Otros
              </h4>
              <hr/>
              <Link to="#" 
                class="btn btn-primary">
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosL;