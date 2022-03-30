import React from 'react';
import './style_consulta.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import  DASH from "../components/js/Dashboard";
import Cookies from 'universal-cookie';

class ContainerGestionProyectos   extends React.Component {

  componentDidMount(){
    const cookies = new Cookies();
if(cookies.get('color_dash') =="azul"){
    document.getElementById("primary").classList.add("alert-primary1");
    document.getElementById("primary1").classList.add("alert-primary1");
    document.getElementById("primary2").classList.add("alert-primary1"); 
}else if(cookies.get('color_dash') =="morado"){
    document.getElementById("primary").classList.add("alert-primary2");
    document.getElementById("primary1").classList.add("alert-primary2"); 
    document.getElementById("primary2").classList.add("alert-primary2"); 
}else if(cookies.get('color_dash') =="verde"){
    document.getElementById("primary").classList.add("alert-primary3"); 
    document.getElementById("primary1").classList.add("alert-primary3"); 
    document.getElementById("primary2").classList.add("alert-primary3");
}else if(cookies.get('color_dash') =="gris"){
    document.getElementById("primary").classList.add("alert-primary4"); 
    document.getElementById("primary1").classList.add("alert-primary4"); 
    document.getElementById("primary2").classList.add("alert-primary4");
}



  const id =2;
     
  
      fetch(`http://semillerows3/PlataformaSemilleroBackend/api/proyecto/${id}`)
   
      .then((response) => response.json())
      .then((res) => {
         this.state = res;
        
        //  if(this.state.id_estado == 1 ){
          const cookies = new Cookies();
          const nombre=this.state.nombre;
          const descripcion=this.state.descripcion;
          const fecha_inicio=this.state.fecha_inicio;
          const fecha_fin= this.state.fecha_fin; 
          const id_estado= this.state.id_estado;
          const id_area=this.state.id_area;
          const condicion=this.state.condicion;
         //  creamos la cookies 
          cookies.set("nombre_proyecto",`${nombre}`, {path: '/ ; '} );
          cookies.set("descripcion_proyecto",`${descripcion}`, {path: '/ ; '} );
          cookies.set("fecha_inicio_proyecto",`${fecha_inicio}`, {path: '/ ; '} );
          cookies.set("fecha_fin_proyecto",`${fecha_fin}`, {path: '/ ; '} );
          cookies.set("id_estado_proyecto",`${id_estado}`, {path: '/ ; '} );
          cookies.set("id_area_proyecto",`${id_area}`, {path: '/ ; '} );
          cookies.set("condicion_proyecto",`${condicion}`, {path: '/ ; '} );

          if(cookies.get('fecha_fin_proyecto')== "null"){
            cookies.remove("fecha_fin_proyecto",`${fecha_fin}`,{path: '/ ; '});
        
            const fecha_fin_proyectoac="sin fecha final";
            cookies.set("fecha_fin_proyecto",`${fecha_fin_proyectoac}`, {path: '/ ; '} );
          }

          if( cookies.get('id_area_proyecto') == "1"){
            cookies.remove("id_area_proyecto",`${id_area}`,{path: '/ ; '});
        
            const id_area_proyectoaa="Esri";
            cookies.set("id_area_proyecto",`${id_area_proyectoaa}`, {path: '/ ; '} );
          }else if( cookies.get('id_area_proyecto') == "2"){
            cookies.remove("id_area_proyecto",`${id_area}`,{path: '/ ; '});
        
            const id_area_proyectoaa="Gerencia";
            cookies.set("id_area_proyecto",`${id_area_proyectoaa}`, {path: '/ ; '} );
          }else if( cookies.get('id_area_proyecto') == "3"){
            cookies.remove("id_area_proyecto",`${id_area}`,{path: '/ ; '});
        
            const id_area_proyectoaa="Internos";
            cookies.set("id_area_proyecto",`${id_area_proyectoaa}`, {path: '/ ; '} );
          }

          if(this.state.id_estado == "1"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="BackLog";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }else  if(this.state.id_estado == "2"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="Sprint";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }else if(this.state.id_estado == "3"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="To do";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }else if(this.state.id_estado == "4"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="In process";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }else if(this.state.id_estado == "5"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="QA";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }else if(this.state.id_estado == "6"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="Error";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }else if(this.state.id_estado == "7"){
            cookies.remove("id_estado_proyecto",`${id_estado}`,{path: '/ ; '});
        
            const id_estado_proyectoaa="Done";
            cookies.set("id_estado_proyecto",`${id_estado_proyectoaa}`, {path: '/ ; '} );
           }
        
                
                })
            
  
  

}

consultarproyectoid = (e) => {
 
  
const id =1;
   

    fetch(`http://semillerows3/PlataformaSemilleroBackend/api/proyecto/1`)
 
    .then((response) => response.json())
    .then((res) => {
       this.state = res;
      
       const cookies = new Cookies();
       const nombre=this.state.nombre;
       const descripcion=this.state.descripcion;
       const fecha_inicio=this.state.fecha_inicio;
       const fecha_fin=this.state.fecha_fin;
       const id_estado=this.state.id_estado;
       const id_area=this.state.id_area;
       const condicion=this.state.condicion;
      //  creamos la cookies 
       cookies.set("nombre_proyecto",`${nombre}`, {path: '/ ; '} );
       cookies.set("descripcion_proyecto",`${descripcion}`, {path: '/ ; '} );
       cookies.set("fecha_inicio_proyecto",`${fecha_inicio}`, {path: '/ ; '} );
       cookies.set("fecha_fin_proyecto",`${fecha_fin}`, {path: '/ ; '} );
       cookies.set("id_estado_proyecto",`${id_estado}`, {path: '/ ; '} );
       cookies.set("id_area_proyecto",`${id_area}`, {path: '/ ; '} );
       cookies.set("condicion_proyecto",`${condicion}`, {path: '/ ; '} );
                
              
              })
          
}


  render() {
    
    const cookies = new Cookies();
  return (    
    <>
    <DASH/>
    <br/>
    <br/>
    {/* /*body es el contenedor de la img fondo*/ }
    <div id="body1">
      {/*contenedor de todas las tablas*/}
      <div className="container">
        <center id="ubicacion"><h3>Consulta proyecto</h3></center>
        {/*<!-- Editar proyecto-->*/}
        <div className="card" >
          <h5 className="card-header" id="primary" > </h5>
          <div className="card-body" id="hola">
            {/*<!-- botones proyecto-->*/}
            <div id="primeraTabla" align="right">
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editarproyecto">Edit </button>
          &nbsp;
          <button class="btn btn-danger"  type="submit">Elim</button>

          {/*<!-- Modal Editar proyecto -->*/}

<div class="modal fade" id="editarproyecto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          {/* <div class="modal fade" id="editarproyecto" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true" align="left">
              <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header" >
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body"id="modales" >
                  <div class="card border-primary mb-3 tarjeta">

                    <div class="card-header">Editar proyecto</div>

                    <div class="card-body text-primary" id="modales"  >
                      <form >
                        <div class="form-group ">
                          <label for="formGroupExampleInput">Nombre proyecto</label>
                          <input type="text" class="form-control" id="formGroupExampleInput"></input>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Descripción</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-row">
                          <div class="col">
                            <label for="formGroupExampleInput">Fecha inicio</label>
                            <input type="date" class="form-control"></input>
                          </div>
                          <div class="col">
                            <label for="formGroupExampleInput">Fecha fin</label>
                            <input type="date" class="form-control"></input>
                          </div>
                        </div>
                        <br></br>
                        <div class="form-group">
                          <div class="row">

                            <div class="col-md-6">
                              <label for="validationTooltip04">Estado</label>
                              <select class="custom-select" id="validationTooltip04" required>
                                <option selected disabled value="">Seleccionar</option>
                                <option>Proceso</option>
                                <option>Espera</option>
                                <option>Finalizado</option>
                              </select>
                              <div class="invalid-tooltip">
                                Porfavor seleccionar un estado valido.
                              </div>
                            </div>

                            <div class="col-md-6">
                              <label for="validationTooltip04">Area</label>
                              <select class="custom-select" id="validationTooltip04" required>
                                <option selected disabled value="">Seleccionar</option>
                                <option>Esri</option>
                                <option>Gerencia</option>
                                <option>Internos</option>
                              </select>
                              <div class="invalid-tooltip">
                                Porfavor seleccionar un estado valido.
                              </div>
                            </div>
                          </div>
                          <center><button type="button" id="Btn-Modal" class="btn btn-outline-primary">Editar</button></center>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>*/} 
        </div>

            {/*<!--tabla de proyectos-->*/}
            <table className="table table-hover table-bordered table-sm">
              <tbody>
                <tr>
                  <th scope="col">Nombre Proyecto</th>
                  <td>{cookies.get('nombre_proyecto')}</td>
                </tr>
                <tr>
                  <th scope="row">Descripción</th>
                  <td>{cookies.get('descripcion_proyecto')}</td>
                </tr>
                <tr>
                  <th scope="row">Fecha inicio</th>
                  <td>{cookies.get('fecha_inicio_proyecto')}</td>
                </tr>
                <tr>
                  <th scope="row">Fecha fin</th>
                  <td>{cookies.get('fecha_fin_proyecto')}</td>
                </tr>
                <tr>
                  <th scope="row">Estado</th>
                  <td className="table-warning">{cookies.get('id_estado_proyecto')}</td>
                </tr>
                <tr>
                  <th scope="col">Area</th>
                  <td>{cookies.get('id_area_proyecto')}</td>
                </tr>
                <tr>
                  <th scope="col">Condicion</th>
                  <td>{cookies.get('condicion_proyecto')}</td>
                </tr>
              </tbody>
            </table>
            <hr></hr>
            <div className="row" id="Espacio">
              <div className="col-md-6 pad_lef" >
                <h5>Tareas</h5>
              </div>
              <div className="col-md-6 pad_rig" align="right">
                {/*<!-- boton modal crear tareas -->*/}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modaltareas">
                  Registrar tarea
                </button>
            <hr></hr>
            <div class="modal fade" id="modaltareas" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true" align="left">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header " id="primary1">
                      <h5 class="modal-title" id="exampleModalLabel">Tareas</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      {/*<!-- cuerpo modal tareas -->*/}

                      <form>
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <label for="titulo">Titulo</label>
                            <input type="text" class="form-control" id="titulo"></input>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="Descripción">Descripción</label>
                          <textarea class="form-control" id="Descripción" rows="3"></textarea>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="fechainicio">Fecha inicio</label>
                            <input type="date" class="form-control" id="fechainicio"></input>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="fechafin">Fecha fin</label>
                            <input type="date" class="form-control" id="fechafin"></input>
                          </div>
                        </div>
                        <div class="row">

                          <div class="form-group col-md-6">
                            <label for="prioridad">Prioridad</label>
                            <select id="prioridad" class="form-control">
                              <option selected>Seleccionar</option>
                              <option>Alto</option>
                              <option>Media</option>
                              <option>Bajo</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="estado">Estado</label>
                            <select id="estado" class="form-control">
                              <option selected>Seleccionar</option>
                              <option>Proceso</option>
                              <option>Prueba</option>
                              <option>Revision</option>
                            </select>
                          </div>
                        </div>
                        <hr></hr>
                        <h5>Colaboradores</h5>
                        <hr></hr>

                        <div class="form-group"  >
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                          </div>
                        </div>

                        <hr></hr>

                        <center><button type="button" class="btn btn-primary">Crear tarea</button></center>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div  id="segundaTabla">
            <table className="table table-bordered table-hover table-sm" id="primary1">
              <thead  id="primary2">
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Fecha inicio</th>
                  <th scope="col">Fecha fin</th>
                  <th scope="col">Prioridad</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Colaboradores</th>
                  <th scope="col">Opciones</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maquetar BD</td>
                  <td>Modelar y estructurar la base de datos</td>
                  <td>13/11/2020</td>
                  <td>13/12/2020</td>
                  <td className="table-danger">Alta</td>
                  <td className="table-warning">Proceso</td>
                  <td >
                    <p id="color">Yuliano Quiñones</p>
                    <p id="color">Octavio Moreno</p>
                    <p id="color">Karen Jimenez</p>
                  </td>
                  <td align="center">
                    <div id="Btn">
                    <p>
                      {/*<!-- Button trigger modal -->*/}
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#editarea">
                        Edit
                      </button>

                      {/*<!-- Modal -->*/}
                  <div class="modal fade" id="editarea" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" align="left">
                    <div class="modal-dialog modal-lg modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header banner" id="color_letra_banner">
                          <h5 class="modal-title" id="exampleModalLabel">Tareas</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          {/*<!-- cuerpo modal tareas -->*/}

                          <form>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="titulo">Titulo</label>
                                <input type="text" class="form-control" id="titulo"></input>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="Descripción">Descripción</label>
                              <textarea class="form-control" id="Descripción" rows="3"></textarea>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="fechainicio">Fecha inicio</label>
                                <input type="date" class="form-control" id="fechainicio"></input>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="fechafin">Fecha fin</label>
                                <input type="date" class="form-control" id="fechafin"></input>
                              </div>
                            </div>
                            <div class="row">

                              <div class="form-group col-md-6">
                                <label for="prioridad">Prioridad</label>
                                <select id="prioridad" class="form-control">
                                  <option selected>Seleccionar</option>
                                  <option>Alto</option>
                                  <option>Media</option>
                                  <option>Bajo</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="estado">Estado</label>
                                <select id="estado" class="form-control">
                                  <option selected>Seleccionar</option>
                                  <option>Proceso</option>
                                  <option>Prueba</option>
                                  <option>Revision</option>
                                </select>
                              </div>
                            </div>
                            <hr></hr>
                            <h5>Colaboradores</h5>
                            <hr></hr>
                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                            </div>
                            <hr></hr>
                            <center><button type="button" class="btn btn-primary">Editar tarea</button></center>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                      </div>
                    </div>
                  </div>
                   </p>
                   <p><button type="button" class="btn btn-danger">Elim</button></p>
                   </div>
                   </td>
                  </tr>
                {/*Campo Tabla Dos*/}
                <tr>
                  <td>Maquetar BD</td>
                  <td>Modelar y estructurar la base de datos</td>
                  <td>13/11/2020</td>
                  <td>13/12/2020</td>
                  <td className="table-danger">Alta</td>
                  <td className="table-warning">Proceso</td>
                  <td>
                    <p id="color">Yuliano Quiñones</p>
                    <p id="color">Octavio Moreno</p>
                    <p id="color">Karen Jimenez</p>
                  </td>
                  <td align="center">
                    <div id="Btn">
                    <p>
                      {/*<!-- Button trigger modal -->*/}
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#editarea">
                        Edit
                      </button>

                      {/*<!-- Modal -->*/}
                  <div class="modal fade" id="editarea" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" align="left">
                    <div class="modal-dialog modal-lg modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header banner" id="color_letra_banner">
                          <h5 class="modal-title" id="exampleModalLabel">Tareas</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          {/*<!-- cuerpo modal tareas -->*/}

                          <form>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="titulo">Titulo</label>
                                <input type="text" class="form-control" id="titulo"></input>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="Descripción">Descripción</label>
                              <textarea class="form-control" id="Descripción" rows="3"></textarea>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="fechainicio">Fecha inicio</label>
                                <input type="date" class="form-control" id="fechainicio"></input>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="fechafin">Fecha fin</label>
                                <input type="date" class="form-control" id="fechafin"></input>
                              </div>
                            </div>
                            <div class="row">

                              <div class="form-group col-md-6">
                                <label for="prioridad">Prioridad</label>
                                <select id="prioridad" class="form-control">
                                  <option selected>Seleccionar</option>
                                  <option>Alto</option>
                                  <option>Media</option>
                                  <option>Bajo</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="estado">Estado</label>
                                <select id="estado" class="form-control">
                                  <option selected>Seleccionar</option>
                                  <option>Proceso</option>
                                  <option>Prueba</option>
                                  <option>Revision</option>
                                </select>
                              </div>
                            </div>
                            <hr></hr>
                            <h5>Colaboradores</h5>
                            <hr></hr>
                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                            </div>
                            <hr></hr>
                            <center><button type="button" class="btn btn-primary">Editar tarea</button></center>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                      </div>
                    </div>
                  </div>
                   </p>
                   <p><button type="button" class="btn btn-danger">Elim</button></p>
                   </div>
                   </td>
                  </tr>
                  {/*Campo Tabla Tres*/}
                  <tr>
                  <td>Maquetar BD</td>
                  <td>Modelar y estructurar la base de datos</td>
                  <td>13/11/2020</td>
                  <td>13/12/2020</td>
                  <td className="table-danger">Alta</td>
                  <td className="table-warning">Proceso</td>
                  <td>
                    <p id="color">Yuliano Quiñones</p>
                    <p id="color">Octavio Moreno</p>
                    <p id="color">Karen Jimenez</p>
                  </td>
                  <td align="center">
                    <div id="Btn">
                    <p>
                      {/*<!-- Button trigger modal -->*/}
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#editarea">
                        Edit
                      </button>

                      {/*<!-- Modal -->*/}
                  <div class="modal fade" id="editarea" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" align="left">
                    <div class="modal-dialog modal-lg modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header banner" id="color_letra_banner">
                          <h5 class="modal-title" id="exampleModalLabel">Tareas</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          {/*<!-- cuerpo modal tareas -->*/}

                          <form>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="titulo">Titulo</label>
                                <input type="text" class="form-control" id="titulo"></input>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="Descripción">Descripción</label>
                              <textarea class="form-control" id="Descripción" rows="3"></textarea>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="fechainicio">Fecha inicio</label>
                                <input type="date" class="form-control" id="fechainicio"></input>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="fechafin">Fecha fin</label>
                                <input type="date" class="form-control" id="fechafin"></input>
                              </div>
                            </div>
                            <div class="row">

                              <div class="form-group col-md-6">
                                <label for="prioridad">Prioridad</label>
                                <select id="prioridad" class="form-control">
                                  <option selected>Seleccionar</option>
                                  <option>Alto</option>
                                  <option>Media</option>
                                  <option>Bajo</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="estado">Estado</label>
                                <select id="estado" class="form-control">
                                  <option selected>Seleccionar</option>
                                  <option>Proceso</option>
                                  <option>Prueba</option>
                                  <option>Revision</option>
                                </select>
                              </div>
                            </div>
                            <hr></hr>
                            <h5>Colaboradores</h5>
                            <hr></hr>
                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Yuliano Quiñones</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Andres Ballen</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Octavio Moreno</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Karen Jimenez</label>
                              </div>
                            </div>
                            <hr></hr>
                            <center><button type="button" class="btn btn-primary">Editar tarea</button></center>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                      </div>
                    </div>
                  </div>
                   </p>
                   <p><button type="button" class="btn btn-danger">Elim</button></p>
                   </div>
                   </td>
                  </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
    );
  }
  }

export default ContainerGestionProyectos;