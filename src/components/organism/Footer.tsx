import React, { useContext } from "react";
import Modify from "../molecules/Modify";
import Delete from "../molecules/Delete";
import NewUser from "../molecules/NewUser";
import UserCurrenIdContext from "../../contexts/UserCurrenIdContext";
import "../../assets/style/Footer.css";

function Footer() {
  const { setCurrenUser } = useContext(UserCurrenIdContext);

  // Handler for the "New User" button click
  const handleNewUserClick = (e:any) => {
    e.preventDefault();
    setCurrenUser([]);
    console.log(`🤨😶🤐|| 🥓 file: Footer.tsx:15 🥓 handleNewUserClick 🥓 setCurrenUser||`)
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
