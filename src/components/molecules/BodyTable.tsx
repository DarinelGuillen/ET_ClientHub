import React, { useContext } from "react";
import UserCurrenIdContext from "../../contexts/UserCurrenIdContext";
import UserContext from "../../contexts/UserContext";
function BodyTable({ params, handleCheckboxChange }) {
  const { currenUser, setCurrenUser } = useContext(UserCurrenIdContext);
  const { usersData, setUsersData } = useContext(UserContext);

  if (!params) {
    return null;
  }

  const { id, name, last_name, mother_last_name, age, gender } = params;

  const handleMoreInfoClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
  
     
    const currentUser = usersData.find((user:any) => user.id === id);
  
    if (currentUser) {
      setCurrenUser(currentUser);
    }
  };
  

  return (
    <>
      <tr key={id}>
        <th scope="row">
          <input
            type="checkbox"
            checked={params === currenUser}
            onChange={(e) => handleCheckboxChange(e, params)}
          />
        </th>
        <td>{name}</td>
        <td>{last_name}</td>
        <td>{mother_last_name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="modal"
            data-target="#ModalMoreInfo"
            onClick={(e) => handleMoreInfoClick(e, id)}
          >
            Más Info
          </button>
        </td>
      </tr>
    </>
  );
}

export default BodyTable;
