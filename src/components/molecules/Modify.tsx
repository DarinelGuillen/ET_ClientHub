import { useContext } from 'react';
// import FormUser from '../atoms/FormUser';
import CurrenUserContext from '../../contexts/CurrenUserContext';

function Modify() {
  const { currenUser } = useContext(CurrenUserContext);

  return (
    <>
      <div className="modal fade" id="ModalModify" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">¡Atención! Modificará un usuario</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* <FormUser params={currenUser} /> */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-success">Guardar Modificaciones</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modify;
