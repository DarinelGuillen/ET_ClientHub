import { useContext } from "react";
import CurrenUserContext from "../../contexts/CurrenUserContext";
import "../../assets/style/FormUser.css";

function AddresForm() {
    const { currenUser, setCurrenUser } = useContext(CurrenUserContext);

    // Function to handle changes in the form
    const handleChange = (e: any) => {
        e.preventDefault();
        const { id, value } = e.target;
        // Here Update the currenUser if the target matches the property in the object
        setCurrenUser((prevUser: any) => ({
            ...prevUser,
            [id]: value,
        }));
    };

    //   useEffect(() => {
    //     console.log(`🤨😶🤐|| 🥓 file: AddresForm.tsx:22 🥓 useEffect 🥓 CurrenUser||`, currenUser)
    //   }, [setCurrenUser]);

    return (
        <>
            <form>
                <div className="Container_FormGroup">
                    <div className="form-group">
                        <label htmlFor="street">Calle</label>
                        <input
                            type="text"
                            className="form-control"
                            id="street"
                            placeholder="Ingrese su dirección"
                            onChange={handleChange}
                            value={currenUser.street || ""} // Add the value here and provide a fallback value ""
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="exteriorNumber">Número exterior</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exteriorNumber"
                                placeholder="Ingrese número exterior"
                                onChange={handleChange}
                                value={currenUser.exteriorNumber || ""} // Add the value here and provide a fallback value ""
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="interiorNumber">Número interior</label>
                            <input
                                type="text"
                                className="form-control"
                                id="interiorNumber"
                                placeholder="Ingrese número interior"
                                onChange={handleChange}
                                value={currenUser.interiorNumber || ""} // Add the value here and provide a fallback value ""
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="neighborhood">Colonia</label>
                            <input
                                type="text"
                                className="form-control"
                                id="neighborhood"
                                placeholder="Ingrese su colonia"
                                onChange={handleChange}
                                value={currenUser.neighborhood || ""} // Add the value here and provide a fallback value ""
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="municipality">Municipio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="municipality"
                                placeholder="Ingrese su municipio"
                                onChange={handleChange}
                                value={currenUser.municipality || ""} // Add the value here and provide a fallback value ""
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="state">Estado</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="Ingrese su estado"
                                onChange={handleChange}
                                value={currenUser.state || ""} // Add the value here and provide a fallback value ""
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddresForm;
