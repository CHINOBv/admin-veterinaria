import React,{Component} from "react";
import "./Styles.css";

import Header from "./components/Header.jsx";
import Addcitas from "./components/Addcitas.jsx";
import Listcitas from "./components/Listcitas.jsx";

class App extends Component {
  state = {
    citas:[]
  };

  componentDidUpdate() {
    localStorage.setItem(
      "citas",
      JSON.stringify(this.state.citas)
   )
  }
  
  componentDidMount() {
   const CitasLS= localStorage.getItem(
     "citas" 
    );
    if(CitasLS){
      this.setState({
        "citas": JSON.parse(CitasLS)
      })
    }
  }

  Crearcita=(Nuevacita)=>{
    const citas = [...this.state.citas,Nuevacita];
    
    this.setState({
      citas
    })
    
  }
  DelCita=id=>{
    //Copy State
    const citaActual =[...this.state.citas];
    
    //Del State
    const citas = citaActual.filter(cita=>cita.id !== id);


    //Update State
    this.setState({
      citas
    })

  }
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Pacientes" />
        <div className="row">
          <div className="col-md-6">
            <Addcitas 
            Crearcita={this.Crearcita}
            />
          </div>
          <div className="col-md-6">
            <Listcitas
            citas={this.state.citas}
            DelCita={this.DelCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
