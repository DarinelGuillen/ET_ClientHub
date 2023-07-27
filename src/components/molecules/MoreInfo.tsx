import React, { useContext } from "react";
import CurrenUserContext from "../../contexts/CurrenUserContext";

function MoreInfo() {
  const { currenUser } = useContext(CurrenUserContext);

  if (!currenUser) {
    return null;
  }

  const { id, name, last_name, mother_last_name, age, gender, address, preferences } = currenUser;

  return (
    <div className="modal fade" id="ModalMoreInfo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Información de {name}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="user-info">
              <h6>ID: {id}</h6>
              <h6>Nombre: {name}</h6>
              <h6>Apellido Paterno: {last_name}</h6>
              <h6>Apellido Materno: {mother_last_name}</h6>
              <h6>Edad: {age}</h6>
              <h6>Género: {gender}</h6>
            </div>
            <div className="user-address">
              <h6>Dirección:</h6>
              <p>
                Calle: {address?.street || "N/A"}
                <br />
                Número Interior: {address?.interior_number || "N/A"}
                <br />
                Número Exterior: {address?.exterior_number || "N/A"}
                <br />
                Colonia: {address?.neighborhood || "N/A"}
                <br />
                Municipio: {address?.municipality || "N/A"}
                <br />
                Estado: {address?.state || "N/A"}
              </p>
            </div>
            <div className="user-preferences">
              <h6>Preferencias:</h6>
              <p>
                Hobby: {preferences?.hobby || "N/A"}
                <br />
                Destinos: {preferences?.destinations || "N/A"}
                <br />
                Tipo de habitación: {preferences?.roomtype || "N/A"}
                <br />
                Ingresos: {preferences?.income || "N/A"}
                <br />
                Viajes: {preferences?.trips || "N/A"}
                <br />
                Libros: {preferences?.books || "N/A"}
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
