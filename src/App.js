import React,{Component} from "react";
import "./Styles.css";

import Header from "./components/Header.jsx";
import Addcitas from "./components/Addcitas.jsx";

class App extends Component {
  state = {
    citas:[]
  };

  Crearcita=(Nuevacita)=>{
    const citas = [...this.state.citas,Nuevacita];
    
    this.setState({
      citas
    })
    console.log(citas);
    
  }
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Pacientes" />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Addcitas 
            Crearcita={this.Crearcita}
            />
          </div>
          <div className="col-md-6 mx-auto"></div>
        </div>
      </div>
    );
  }
}

export default App;
