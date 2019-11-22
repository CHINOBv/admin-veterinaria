import React, { Component } from "react";

class Cita extends Component {
  state = {};
  DelCita=()=>{
    //send
    this.props.DelCita(this.props.info.id);
  }
  render() {
    const { NMascota, NDue, Fecha, Hora, Sintomas } = this.props.info;
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
          <button className="btn btn-danger btn-block" onClick={this.DelCita}>Borrar</button>
        </div>
      </div>
    );
  }
}

export default Cita;
