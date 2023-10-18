import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile() {
  return (
    <section style = {{backgroundColor:"#eee"}}>
      <div className="container py-4" style = {{backgroundColor:"#BBDEFB"}}>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center" style = {{backgroundColor:"#E3F3F3"}}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width:"150px",backgroundColor:"white"}} />
                <h5 className="my-3">Miguel Ángel Martínez</h5>
                <p className="text-muted mb-1">Desarrollador de software</p>
                <p className="text-muted mb-1">Medellin-Colombia</p>
                <div className="d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary">Editar perfil
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3" style = {{backgroundColor:"#E3F3F3"}}>
                    <p className="mb-0"><BsFacebook/>  Miguel Martínez</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3" style = {{backgroundColor:"#E3F3F3"}}> 
                    <p className="mb-0"><BsGithub/> Miguelitoooo</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3" style = {{backgroundColor:"#E3F3F3"}}>
                    <p className="mb-0"><BsInstagram/>   Miguelmt__</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3" style = {{backgroundColor:"#E3F3F3"}}>
                    <p className="mb-0"><IoLogoTwitter/> Twitter</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3" style = {{backgroundColor:"#E3F3F3"}}>
                    <p className="mb-0"><RiGlobalFill/> Pagina Personal</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body" style = {{backgroundColor:"#E3F3F3"}}>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre Completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Miguel Ángel Martínez Acevedo</p>
                  </div>
                </div>
                <hr/>
                  
                <div className="row">  
                  <div className="col-sm-3">
                    <p className="mb-0">Correo Electronico</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Miguel.m2k4@gmail.com</p>
                  </div>
                </div>
                <hr/>

                <div className="row">  
                  <div className="col-sm-3">
                    <p className="mb-0">Número</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">3046282232</p>
                  </div>
                </div>
                <hr/>

                <div className="row">  
                  <div className="col-sm-3">
                    <p className="mb-0">Dirección</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Guayabal</p>
                  </div>
                </div>
                <hr/>

                <div className="row">  
                  <div className="col-sm-3">
                    <p className="mb-0">Fecha de Nacimiento</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">10 de Julio de 2006</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-mb-0">
                  <div className="card-body" style = {{backgroundColor:"#E3F3F3"}}>
                    <p className="mb-4"><span className="text-primary font-italic me-1">Habilidades</span>Proyecto PPI</p>
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

export default Profile;