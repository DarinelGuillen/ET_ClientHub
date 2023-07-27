import { useContext } from "react";
import Modify from "../molecules/Modify";
import Delete from "../molecules/Delete";
import NewUser from "../molecules/NewUser";
import CurrenUserContext from "../../contexts/CurrenUserContext";
import "../../assets/style/Footer.css";

function Footer() {
  const { setCurrenUser } = useContext(CurrenUserContext);

  const handleNewUserClick = (e: any) => {
    e.preventDefault();
    const newUser = {
      id: "",
      name: "",
      last_name: "",
      mother_last_name: "",
      gender: "",
      age: "",
      street: "",
      interior_number: "",
      exterior_number: "",
      neighborhood: "",
      municipality: "",
      state: "",
      hobby: "",
      destinations: "",
      roomtype: "",
      income: "",
      trips: "",
      books: "",
    };
    console.log(`🤨😶🤐|| 🥓 file: Footer.tsx:33 🥓 handleNewUserClick 🥓 newUser||`, newUser)
    setCurrenUser(newUser);
  };

  return (
    <>
      <footer className="footer mt-auto py-3 custom-footer">
        <div className="container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-secondary mr-3"
                data-toggle="modal"
                data-target="#ModalModify"
              >
                Modify
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-warning mr-3"
                data-toggle="modal"
                data-target="#ModalDelete"
              >
                Delete
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#ModalNewUser"
                onClick={handleNewUserClick} // Add the click handler here
              >
                New User
              </button>
            </li>
          </ul>
        </div>
      </footer>
      <>
        {/* Modals */}
        <Modify />
        <Delete />
        <NewUser />
        {/* End Modals */}
      </>
    </>
  );
}

export default Footer;
