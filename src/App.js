import React,{Component} from "react";
import "./Styles.css";

import Header from "./components/Header.jsx";
import Addcitas from "./components/Addcitas.jsx";
import Listcitas from "./components/Listcitas.jsx";

class App extends Component {
  state = {
    citas:[]
  };

  Crearcita=(Nuevacita)=>{
    const citas = [...this.state.citas,Nuevacita];
    
    this.setState({
      citas
    })
    //console.log(citas);
    
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
