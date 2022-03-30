import React from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import  DASH from "../components/js/Dashboard";
import Cookies from 'universal-cookie';

class Container  extends React.Component {
  state = {
    res: [],
    respuesta:null,
};
  componentDidMount(){


    const cookies = new Cookies();
    if(cookies.get('color_dash') =="azul"){
        document.getElementById("primary").classList.add("alert-primary1");
    }else if(cookies.get('color_dash') =="morado"){
        document.getElementById("primary").classList.add("alert-primary2"); 
    }else if(cookies.get('color_dash') =="verde"){
        document.getElementById("primary").classList.add("alert-primary3"); 
    }else if(cookies.get('color_dash') =="gris"){
        document.getElementById("primary").classList.add("alert-primary4"); 
    }
    const id = cookies.get('id')
  fetch(`http://semillerows3/PlataformaSemilleroBackend/api/asignacion/usuario?usuario=${id}`)
  .then((response) => response.json())
  .then(json=> {
    console.log(json)
    this.setState({
   respuesta:json
})  
})

  }

  render() {
  return ( 
    <>
    <DASH/>
    {/* /*<!--Contenedor de Pagina-->*/ }
    <div id="body">
    
      {/*<!--Contenedor de Proyecto-->*/}
      <div className="container">
        <center><h3 id="GestionDeProyectos">Gestión de proyectos</h3></center>
        <hr></hr>
        {/*<!-- Alerta-->*/}
        <div id="banner">
          <div className="alert " id="primary" role="alert">
            Mis proyectos activos
          </div>
        </div>
        {/*<!-- TARJETAS 1-->*/}
        <div className="row">
          {/*<!-- tarjetas de los proyectos 1-->*/}
          {this.state.respuesta?.map((item,i)=>( 
      <div className="col-sm-4" >
      <div className="card border-primary">
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
            &nbsp;
    <a className="btn btn-primary" href="/Consulta_De_Proyectos" role="button">Consultar</a>
    &nbsp; &nbsp; &nbsp;

        </div>
      </div>
    </div>
  
    ))}
        </div>
      </div>
      
      
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
    </>
  );
  }
}
export default Container;
