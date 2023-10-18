import React from "react";
import Carro from "../Imagenes/Carro.jpg";
import NISSAN from "../Imagenes/NISSAN.jpg";
import MITSUBISHI from "../Imagenes/MITSUBISHI.jpg";
import SUPRA from "../Imagenes/SUPRA.jpg";
import MUSTANG from "../Imagenes/MUSTANG.jpg";
import { FaCar } from "react-icons/fa";

function Content() {
  return (
    <div className="container">
      <h1 className="text-center p-3">
        <strong>CONTENIDO DEL CURSO</strong>
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src={MITSUBISHI}
              className="card-img-top"
              alt="Course 1"/>
            <div className="card-body" 
              style={{ backgroundColor: "#E3F3F3" }}>
              <p style={{ fontSize: 15 }}>
                <strong>Mitsubishi</strong> <FaCar />
              </p>
              <h5 className="card-title">
                <h style={{ color: "Black", fontSize: 30 }}>
                  <strong>Curso 1</strong>
                </h>
              </h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={MUSTANG}
              className="card-img-top"
              alt="Course 2"
            />
            <div className="card-body" 
              style={{ backgroundColor: "#E3F3F3" }}>
              <p style={{ fontSize: 15 }}>
                <strong>Mustang</strong> <FaCar />
              </p>
              <h5 className="card-title">
                <h style={{ color: "Black", fontSize: 30 }}>
                  <strong>Curso 2</strong>
                </h>
              </h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={SUPRA}
              className="card-img-top"
              alt="Course 3"
            />
            <div className="card-body" 
              style={{ backgroundColor: "#E3F3F3" }}>
              <p style={{ fontSize: 15 }}>
                <strong>Supra</strong> <FaCar />
              </p>
              <h5 className="card-title">
                <h style={{ color: "Black", fontSize: 30 }}>
                  <strong>Curso 3</strong>
                </h>
              </h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={NISSAN}
              className="card-img-top"
              alt="Course 4"
            />
            <div className="card-body" 
              style={{ backgroundColor: "#E3F3F3" }}>
              <p style={{ fontSize: 15 }}>
                <strong>Nissan</strong> <FaCar />
              </p>
              <h5 className="card-title">
                <h style={{ color: "Black", fontSize: 30 }}>
                  <strong>Curso 4</strong>
                </h>
              </h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
