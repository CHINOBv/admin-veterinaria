import React, { Component } from "react";

class Cita extends Component {
  state = {};
  render() {
    const { id, NMascota, NDue, Fecha, Hora, Sintomas } = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">Nombre de la Mascota: {NMascota}</h3>
          <p className="card-text">
            <span>Nombre del Dueño: </span>{NDue}
          </p>
          <p className="card-text">
            <span>Fecha: </span>{Fecha}
          </p>
          <p className="card-text">
            <span>Hora: </span>{Hora}
          </p>
          <p className="card-text">
            <span>Sintomas: </span>{Sintomas}
          </p>
          <p className="card-title"></p>
        </div>
      </div>
    );
  }
}

export default Cita;
