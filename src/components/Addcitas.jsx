import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';

class Addcitas extends Component {
  NMascota = React.createRef();
  NDue = React.createRef();
  Fecha = React.createRef();
  Hora = React.createRef();
  Sintomas = React.createRef();

  state = {

    "error":false
  };

  CrearCita = e => {
    //Prevenir Default
    e.preventDefault();

    const NMascota= this.NMascota.current.value,
          NDue= this.NDue.current.value,
          Fecha= this.Fecha.current.value,
          Hora= this.Hora.current.value,
          Sintomas=this.Sintomas.current.value;

    //validate fields
    if(NMascota==="" || NDue=== ""|| Fecha===""|| Hora===""|| Sintomas===""){
      this.setState({
        "error":true
      })
    }else{

      //Create Oject Whit Data of Citas
      const Nuevacita = {
        "id": uuid(),
        NMascota,
        NDue,
        Fecha,
        Hora,
        Sintomas
      };
      //Send Object to App.js
      this.props.Crearcita(Nuevacita);
      //Reset
      e.currentTarget.reset();
    }
  };
  render() {
    const error = this.state.error;
    return (
      <div className="card md-5">
        <div className="card-body">
          <h2 className="card-text mb-5 text-center"> Agrega Una Cita</h2>
          <form onSubmit={this.CrearCita}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  ref={this.NMascota}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                  ref={this.NDue}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input type="date" className="form-control" ref={this.Fecha} />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" ref={this.Hora} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  ref={this.Sintomas}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success w-100">
                Agregar
              </button>
            </div>
          </form>
          {
            error?
          <div className="alert alert-danger text-center" role="alert">
              Favor de llenar  todos los campos
          </div>
          :
          ""
          }
        </div>
      </div>
    );
  }
}
Addcitas.propTypes={
  Crearcita: PropTypes.func.isRequired
}

export default Addcitas;
