import FormNewUser from '../atoms/FormNewUser';

function NewUser() {

  
  return (
    <>
      <div className="modal fade" id="ModalNewUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Crear Usuario Nuevo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
                <FormNewUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
