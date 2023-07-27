import { useContext } from "react";
import CurrenUserContext from "../../contexts/CurrenUserContext";
import "../../assets/style/FormUser.css";

function UsersForm() {
    const { currenUser, setCurrenUser } = useContext(CurrenUserContext);

    const handleChange = (e: any) => {
        e.preventDefault();
        const { id, value } = e.target;
        setCurrenUser((prevUser: any) => ({
            ...prevUser,
            [id]: value,
        }));
    };


    return (
        <>
            <form>
                <div className="Container_FormGroup">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Ingrese su nombre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="last_name">Apellido paterno</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last_name"
                                placeholder="Ingrese su apellido paterno"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="mother_last_name">Apellido materno</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mother_last_name"
                                placeholder="Ingrese su apellido materno"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="age">Edad</label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                placeholder="Ingrese su edad"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="gender">Género</label>
                            <select
                                className="form-control"
                                id="gender"
                                onChange={handleChange}
                            >
                                <option value="N/A">seleccione</option>
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default UsersForm;
