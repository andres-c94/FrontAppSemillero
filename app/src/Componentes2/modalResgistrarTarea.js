{/*<!-- Modal -->*/}
<div class="modal fade" id="modaltareas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" align="left">
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
          <div class="form-group">
            <label for="Descripción">Descripción</label>
            <textarea class="form-control" id="Descripción" rows="3"></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="fechainicio">Fecha inicio</label>
              <input type="date" class="form-control" id="fechainicio"></input>
              <div class="form-group col-md-6">
                <label for="fechafin">Fecha fin</label>
                <input type="date" class="form-control" id="fechafin"></input>
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