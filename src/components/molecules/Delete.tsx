import React, { useContext } from "react";
import UserCurrenIdContext from "../../contexts/UserCurrenIdContext";

function Delete() {
  // Access the current user context
  const { currenUser } = useContext(UserCurrenIdContext);

  return (
    <>
      {/* Advertencia: Cuidado al borrar usuario */}
      <div className="modal fade" id="ModalDelete" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">¡Atención! Borrara usuario {currenUser.name} {currenUser.last_name} {currenUser.mother_last_name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ¿Estás seguro de que deseas borrar el usuario {currenUser ? currenUser.name : "seleccionado"}? Esta acción es irreversible y se eliminarán todos los datos relacionados con el usuario.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger">Borrar usuario</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
