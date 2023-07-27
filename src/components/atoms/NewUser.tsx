import { useContext, useEffect } from "react";
import UsersForm from '../atoms/usersForm';
import AddresForm from '../atoms/AddresForm';
import PreferencesForm from '../atoms/PreferencesForm';
import CurrenUserContext from '../../contexts/CurrenUserContext';
import '../../assets/style/FormUser.css';

function NewUser() {
  const { currenUser, setCurrenUser } = useContext(CurrenUserContext);

  useEffect(() => {
    console.log(`NEWUSER🤨😶🤐|| 🥓 file: usersForm.tsx:20 🥓 useEffect 🥓 currenUser||`, currenUser)
  }, [currenUser])

  // Function to handle the "Guardar" button click
  const handleGuardarClick = (e:any) => {
    e.preventDefault();
    console.log(`🤨😶🤐|| 🥓 file: NewUser.tsx:19 🥓 handleGuardarClick 🥓 currenUser||`, currenUser)
    const url="http://localhost:3000/users"
    const options={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currenUser),
    };
    fetch(url,options)
      .then(response => response.json())
      .then(data => {
        console.log("Response data:", data);
        setCurrenUser([]);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="modal fade" id="ModalNewUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Crear Usuario Nuevo
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <UsersForm />
              <AddresForm />
              <PreferencesForm />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-success" onClick={handleGuardarClick}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
