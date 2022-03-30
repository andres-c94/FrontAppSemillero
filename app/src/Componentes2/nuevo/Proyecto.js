import React from "react";
import "./proyectos.css";

import DASH from "../../components/js/Dashboard";

class GestionProyectos extends React.Component {
  render() {
    return (
      <>
        <DASH />
        <div className="contenidoimgen">
          <div id="containerid">
            <div className="container">
              <br></br>
              <br></br>
              <br></br>
              <center>
                <h3 style={{ marginLeft: '55px' }}>Gestión de proyectos</h3>
              </center>
              <br></br>
            <div class="container"></div>
              {/*Botón de consultar todos*/}
              <div align="center">
                <a className="btn btn-secondary" href="/Consulta_Todos" style={{ marginLeft: '55px' }} role="button">
                  Consultar todos
                </a>
              </div>
              {/*fin*/}
              <div className="container-fluid containercard justify-content-center">
                <div id="row1" className="row">
                  <div id="cambios" className="col-lg-6">
                    <div id="tarjeta1" className="cambios">
                      <div
                        className="card-header banner"
                        id="color_letra_banner"
                      >
                        Crear nuevo proyecto
                      </div>
                      <div className="card-body text-light  card_color">
                        <form>
                          <div className="form-group">
                            <label for="formGroupExampleInput">
                              Nombre proyecto
                            </label>
                            <input
                              type="text"
                              ref={this.NombreProyecto}
                              class="form-control"
                              id="formGroupExampleInput"
                            ></input>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                              Descripción
                            </label>
                            <textarea
                              ref={this.Descripcion}
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="form-row">
                            <div className="col">
                              <label for="formGroupExampleInput">
                                Fecha inicio
                              </label>
                              <input
                                type="date"
                                ref={this.fechainicio}
                                class="form-control"
                              ></input>
                            </div>
                            <div className="col">
                              <label for="formGroupExampleInput">
                                Fecha fin
                              </label>
                              <input
                                type="date"
                                ref={this.fechafin}
                                className="form-control"
                              ></input>
                            </div>
                          </div>
                          <br></br>
                          <div className="form-row">
                            <div className="col">
                              <label for="formGroupExampleInput">Estado</label>
                              <select
                                className="custom-select"
                                id="validationTooltip04"
                                required
                              >
                                <option selected disabled value="">
                                  Seleccionar
                                </option>
                                <option>Proceso</option>
                                <option>Espera</option>
                                <option>Finalizado</option>
                              </select>
                              <div className="invalid-tooltip">
                                Por favor seleccione un estado válido
                              </div>
                            </div>
                            <div className="col">
                              <label for="formGroupExampleInput">Area</label>
                              <select
                                className="custom-select"
                                id="validationTooltip04"
                                required
                              >
                                <option selected disabled value="">
                                  Seleccionar
                                </option>
                                <option>Esri</option>
                                <option>Gerencia</option>
                                <option>Internos</option>
                              </select>
                              <div className="invalid-tooltip">
                                Por favor seleccione un estado válido
                              </div>
                            </div>
                          </div>

                          <br></br>
                          <div className="ml-auto d-flex buttons">
                            <div className="btn-group ">
                              <div className="col-2">
                                <button type="reset" className="btn btn-dark ">
                                  Limpiar
                                </button>
                              </div>
                            </div>
                            <div className="btn-group">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Registrar
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/*Segunda sección proyectos*/}
                  <div id="cambios" className="col-lg-6">
                    <div id="tarjeta1" className="cambios">
                      <div
                        className="card-header banner"
                        id="color_letra_banner"
                      >
                        Proyecto recientes
                      </div>
                      <div className="card-body text-light  card_color">
                        <div class="row row-cols-1 row-cols-sm-2 ">
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">App semillero</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <a
                                  className="btn btn-primary"
                                  href="consulta_proyecto.html"
                                  role="button"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GestionProyectos;
