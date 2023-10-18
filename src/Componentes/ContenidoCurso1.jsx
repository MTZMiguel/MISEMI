import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import MITSUBISHI from "../Imagenes/MITSUBISHI.jpg";

function ContenidoCurso1() {
  return (
    <section>
      <div className="container py-4" style={{ backgroundColor: "#BBDEFB" }}>
        <div className="row">
          <div className="col-lg-4">
            <div className="card pb-3" 
              style={{ backgroundColor: "#BBDEFB",borderColor:"#BBDEFB"}}>
              <img src={MITSUBISHI} 
                className="card-img-top" 
                alt="..." />
              <div className="card-body" 
                style={{ backgroundColor: "#E3F3F3" }}>
                <h5 className="card-title text-center">
                  <strong>MITSUBISHI</strong>
                </h5>
              </div>
            </div>
          </div> 
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body" 
                style={{ backgroundColor: "#E3F3F3" }}>
                <div className="row ">
                  <div className="col-sm-3">
                    <div className="dropdown">
                      <button className="btn btn-outline dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown" 
                        aria-expanded="false">
                        <strong>SEMANA 1</strong>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">GENERACIONES</a></li>
                        <li><a className="dropdown-item" href="#">MODELOS</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <button type="button" 
                      className="btn" 
                      style={{ backgroundColor: "#90CAF9" }}>
                      <strong>INICIAR</strong>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <div className="dropdown">
                      <button className="btn btn-outline dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown" 
                        aria-expanded="false">
                        <strong>SEMANA 2</strong>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">NIVELES DE EQUIPAMIENTO</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <button type="button" 
                      className="btn" 
                      style={{ backgroundColor: "#90CAF9" }}>
                      <strong>INICIAR</strong>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <div className="dropdown">
                      <button className="btn btn-outline dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown" 
                        aria-expanded="false">
                        <strong>SEMANA 3</strong>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">NIVELES DE EQUIPAMIENTO (SESIÓN 2)</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <button type="button" 
                      className="btn" 
                      style={{ backgroundColor: "#90CAF9" }}>
                      <strong>INICIAR</strong>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <div className="dropdown">
                      <button className="btn btn-outline dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown" 
                        aria-expanded="false">
                        <strong>SEMANA 4</strong>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">TREN MOTRIZ</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <button type="button" 
                      className="btn" 
                      style={{ backgroundColor: "#90CAF9" }}>
                      <strong>INICIAR</strong>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <div className="dropdown">
                      <button className="btn btn-outline dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown" 
                        aria-expanded="false">
                        <strong>SEMANA 5</strong>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">APARICIONES NOTABLES</a></li>
                        <li><a className="dropdown-item" href="#">COMPETENCIA</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <button type="button" 
                      className="btn" 
                      style={{ backgroundColor: "#90CAF9" }}>
                      <strong>INICIAR</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContenidoCurso1;
