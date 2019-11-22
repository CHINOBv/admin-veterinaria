import React, { Component } from "react";
import PropTypes from 'prop-types';

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
Listcitas.propTypes={
  citas: PropTypes.array.isRequired,
  DelCita: PropTypes.func.isRequired
}

export default Listcitas;
