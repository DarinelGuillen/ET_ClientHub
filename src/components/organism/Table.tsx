import { useEffect, useContext } from "react";
import BodyTable from "../molecules/BodyTable";
import MoreInfo from "../molecules/MoreInfo";
import UserContext from "../../contexts/UserContext";
import CurrenUserContext from "../../contexts/CurrenUserContext";
import "../../assets/style/Table.css";

function Table() {
  const { usersData, setUsersData } = useContext(UserContext);
  const { currenUser, setCurrenUser } = useContext(CurrenUserContext);

  useEffect(() => {
    const url = "http://localhost:3000/users";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsersData(data.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [currenUser]);

  const handleCheckboxChange = (e, params) => {
    if (e.target.checked) {
      setCurrenUser(params);
      console.log(`🤨😶🤐|| 🥓 file: Table.tsx:33 🥓 handleCheckboxChange 🥓 params||`, params)
    } else {
      setCurrenUser([]);
    }
  };

  return (
    <>
      {/* Modal */}
      <MoreInfo />
      {/*  */}
      <div className="Container">
        <div className="table-responsive">
          <table className="table table-striped table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido Paterno</th>
                <th scope="col">Apellido Materno</th>
                <th scope="col">Edad</th>
                <th scope="col">Sexo</th>
                <th scope="col">Informacion Completa</th>
              </tr>
            </thead>
            <tbody>
              {usersData.length > 0 ? (
                usersData.map((params: any) => (
                  <BodyTable key={params.id} params={params} handleCheckboxChange={handleCheckboxChange} />
                ))
              ) : (
                <tr>
                  <td colSpan={7}>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
