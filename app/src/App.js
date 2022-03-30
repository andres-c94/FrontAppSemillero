import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CONSULTARU from './components/js/Consulta_Usuario'
import DASH from './components/js/Dashboard'
import NAV from './components/js/nav'
import FORO from './components/js/Foro'
import INDEX from './components/js/index'
import LOGIN from './components/js/login'
import PERFILU from './components/js/Perfil_Usuario'
import PRIMEROS from './components/js/Primeros_Pasos'
import PRINCIPAL from './components/js/Principal'
import REGISTRARU from './components/js/Registrar_Usuario'
import ContainerGestionProyectos from './Componentes2/Gestion_Proyectos'
import GestionProyectos from './Componentes2/nuevo/Proyecto'
import Container from './Componentes2/mis_proyectos';
import CONSULTARUACTIVO from './components/js/Consulta_Usuarios_Activos'
import CONSULTARUINACTIVOS from './components/js/Consulta_Usuarios_Inactivos'
import CONSULTATODOS from './components/js/Consultar_Todos_Proyectos'

function App() {
  return (
    
    <Router basename="https://geoapps.esri.co/PlataformaSemillero">
      <Switch>
        <Route path="/Consulta_Inactivos" exact component={CONSULTARUINACTIVOS} />
        <Route path="/Consulta_Usuario" exact component={CONSULTARUACTIVO} />
        <Route path="/Consulta_Activos" exact component={CONSULTARU} />
        <Route path="/Dashboard" exact component={DASH} />
        <Route path="/Nav" exact component={NAV} /> 
        <Route path="/Foro" exact component={FORO} />
        <Route path="/" component={INDEX} />
        <Route path="/login" exact component={LOGIN} />
        <Route path="/Perfil_Usuario" exact component={PERFILU} />
        <Route path="/Primeros_Pasos" exact component={PRIMEROS} />
        <Route path="/Principal" exact component={PRINCIPAL} />
        <Route path="/Registrar_Usuario" exact component={REGISTRARU} /> 
        <Route path="/Consulta_De_Proyectos" exact component={ContainerGestionProyectos}></Route>
        <Route path="/Gestion_De_Proyectos" exact component={Container}></Route>
        <Route path="/Gestion_Proyectos" exact component={GestionProyectos}></Route>
        <Route path="/Consulta_Todos" exact component={CONSULTATODOS}></Route>
      
      </Switch>
    </Router>
  );
}


export default App;