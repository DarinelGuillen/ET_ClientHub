function Modify() {
    return (
      <>
        <div className="modal fade" id="ModalModify" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">¡Atención! Modificara un usuario</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ¿Estás seguro de que deseas borrar este usuario? Esta acción es irreversible y se eliminarán todos los datos relacionados con el usuario.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-success">Guardar Modificasiones</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Modify;
  