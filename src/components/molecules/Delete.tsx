import { useContext, useRef } from "react";
import CurrenUserContext from "../../contexts/CurrenUserContext";

function Delete() {
  const { currenUser, setCurrenUser } = useContext(CurrenUserContext);
  const modalRef = useRef(null);
  const cancelButtonRef = useRef(null);

  const handleDeleteUser = async (e: any, userId: any) => {
    e.preventDefault();
    if (userId >= 0) {
      console.log(`🤨😶🤐|| 🥓 file: Delete.tsx:10 🥓 handleDeleteUser 🥓 userId||`, userId)
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
          method: "DELETE",
        });
        if (response.status === 200) {
          alert("User deleted successfully!");
          setCurrenUser([]);

          if (cancelButtonRef.current) {
            const cancelButtonElement = cancelButtonRef.current as HTMLButtonElement;
            cancelButtonElement.click();
          }
        } else {
          alert("Failed to delete user.");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    } else {
      alert("Lo sentimos no podemos eliminar\n intenta seleccionar a un usuario")
    }
  };

  return (
    <>
      {/* Advertencia: Cuidado al borrar usuario */}
      <div className="modal fade" id="ModalDelete" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" ref={modalRef}>
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
              <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={cancelButtonRef}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={(e) => handleDeleteUser(e, currenUser.id)}>Borrar usuario</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
