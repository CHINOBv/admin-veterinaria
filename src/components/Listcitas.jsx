import React, { Component } from "react";

import Cita from './Cita.jsx'

class Listcitas extends Component {
  state = {};
  render() {
    const citas = this.props.citas;
    const message =
      Object.keys(citas).length === 0 ? "No Hay Citas" : "Administra tus Citas";
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">{message}</h3>
          {Object.keys(citas).map(citas =>(
              <Cita
              key={citas}
              info={this.props.citas[citas]}
              DelCita={this.props.DelCita}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default Listcitas;
