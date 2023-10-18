import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilo/Estilos.css';
import Carro from "../Imagenes/Carro.jpg"
import MITSUBISHI from "../Imagenes/MITSUBISHI.jpg"
import SUPRA from "../Imagenes/SUPRA.jpg"
import MUSTANG from "../Imagenes/MUSTANG.jpg"
import NISSAN from "../Imagenes/NISSAN.jpg"

import { BiTime } from 'react-icons/bi';

function InicioL() {
  return (
    <div className="row">
      <div className="container p-3" style = {{ backgroundColor: '#BBDEFB'}}>
        <div className='p-3'>
          <h1 className="text fw-bold text-center">CONTINUAR MIS CURSOS</h1>
          <div class="card ">
            <div class="card-header" style={{backgroundColor:"#90CAF9"}}>
              <strong>Bachiller | Media Tenica TIC</strong>
            </div>
            <div class="card-body" style={{backgroundColor:"#E3F3F3"}}>
              <h5 class="card-title encabezado">Desarrollo de software</h5>
              <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "30%"}}>
                  75%
                </div>
              </div>
              <p class="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="/MisCursos" class="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center">
        <h2 className="text fw-bold text-center">CURSOS DESTACADOS</h2>
      </div>
      
      <div className="container px-5">
        <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              
              <div class="card">
                <img src={SUPRA} class="card-img-top" alt="..."/>
                <div class="card-body" style={{backgroundColor:"#E3F3F3"}}>
                  <h5 class="card-title text-center"><h style={{color:'Black',fontSize:30}}><strong>SUPRA</strong></h></h5>
                  <p class="card-text"></p>
                  <div className="row pb-3">
                    <div className="col"><p><small><BiTime/><strong>120 HORAS</strong></small></p></div>
                    <div className="col"><p><small><BiTime/><strong>3 MODULOS</strong></small></p></div>
                    <div className="col"><p><small><BiTime/><strong>100% ONLINE</strong></small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Continuar</Link>
                </div>
              </div>
            
            </div>
            <div class="carousel-item">
              <div class="card">
                <img src={NISSAN} class="card-img-top" alt="..."/>
                <div class="card-body" style={{backgroundColor:"#E3F3F3"}}>
                  <h5 class="card-title text-center"><h style={{color:'Black',fontSize:30}}><strong>NISSAN</strong></h></h5>
                  <p class="card-text"></p>
                                    <div className="row pb-3">
                    <div className="col"><p><small><BiTime/><strong>120 HORAS</strong></small></p></div>
                    <div className="col"><p><small><BiTime/><strong>3 MODULOS</strong></small></p></div>
                    <div className="col"><p><small><BiTime/><strong>100% ONLINE</strong></small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Continuar</Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card ">
                <img src={MUSTANG} class="card-img-top" alt="..."/>
                <div class="card-body" style={{backgroundColor:"#E3F3F3"}}>
                  <h5 class="card-title text-center"><h style={{color:'Black',fontSize:30}}><strong>MUSTANG</strong></h></h5>
                  <p class="card-text"></p>
                                    <div className="row pb-3">
                    <div className="col"><p><small><BiTime/><strong>120 HORAS</strong></small></p></div>
                    <div className="col"><p><small><BiTime/><strong>3 MODULOS</strong></small></p></div>
                    <div className="col"><p><small><BiTime/><strong>100% ONLINE</strong></small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Continuar</Link>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>        
      </div>
      
    </div>
  );
}

export default InicioL;