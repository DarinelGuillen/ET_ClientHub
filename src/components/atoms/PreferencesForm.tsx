import { useContext } from "react";
import CurrenUserContext from "../../contexts/CurrenUserContext";
import "../../assets/style/FormUser.css";

function PreferencesForm() {
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
                    {/* Does Work Properly */}
                    <div className="form-group">
                        <label htmlFor="roomtype">Tipo de habitación</label>
                        <select
                            className="form-control"
                            id="roomtype"
                            onChange={handleChange}
                            value={currenUser.roomtype || ""}
                        >
                            <option value="N/A">selecione</option>
                            <option value="Casa propia">Casa propia</option>
                            <option value="Departamento">Departamento</option>
                            <option value="Renta">Renta</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="income">Ingreso Mensual</label>
                        <select
                            className="form-control"
                            id="income"
                            onChange={handleChange}
                            value={currenUser.income || ""}
                        >
                            <option value="N/A">selecione</option>
                            <option value="2,500—5,000">2,500 — 5,000</option>
                            <option value="5,001—7,000">5,001 — 7,000</option>
                            <option value="7,001—10,000">7,001 — 10,000</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="trips">Viajes realizados durante el año</label>
                        <select
                            className="form-control"
                            id="trips"
                            onChange={handleChange}
                            value={currenUser.trips || ""}
                        >
                            <option value="N/A">Selecione</option>
                            <option value="1-3">1—3</option>
                            <option value="4-6">4—6</option>
                            <option value="7-10">7-10</option>
                        </select>
                    </div>
                    {/* Does Work Properly end */}
                        <div className="form-group">
                        <label htmlFor="books">Géneros de libros preferidos</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="bookRomance" value="Romance" />
                            <label className="form-check-label" htmlFor="bookRomance">
                                Romance
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="bookNovel" value="Novela" />
                            <label className="form-check-label" htmlFor="bookNovel">
                                Novela
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="bookFantasy" value="Fantasía" />
                            <label className="form-check-label" htmlFor="bookFantasy">
                                Fantasía
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="bookPolitics" value="Política" />
                            <label className="form-check-label" htmlFor="bookPolitics">
                                Política
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="bookCientific" value="Cientifico" />
                            <label className="form-check-label" htmlFor="bookPolitics">
                                Cientifico
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label htmlFor="destinations">Destinos de Viajes preferidos</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="destinationDesert" value="Desierto" />
                        <label className="form-check-label" htmlFor="destinationDesert">
                            Desierto
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="destinationBeach" value="Playa" />
                        <label className="form-check-label" htmlFor="destinationBeach">
                            Playa
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="destinationCity" value="Ciudad" />
                        <label className="form-check-label" htmlFor="destinationCity">
                            Ciudad
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="destinationMountain" value="Montaña" />
                        <label className="form-check-label" htmlFor="destinationMountain">
                            Montaña
                        </label>
                    </div>
                    </div>
                
                    <div className="form-group">
                    <label htmlFor="interests">Intereses preferidos</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="interestMusic" value="Música" />
                        <label className="form-check-label" htmlFor="interestMusic">
                        Música
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="interestMovies" value="Cine" />
                        <label className="form-check-label" htmlFor="interestMovies">
                        Cine
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="interestModeling" value="Modelado" />
                        <label className="form-check-label" htmlFor="interestModeling">
                        Modelado
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="interestShopping" value="Compras" />
                        <label className="form-check-label" htmlFor="interestShopping">
                        Compras
                        </label>
                    </div>
                    </div>
                
                    
                </div>
            </form>
        </>
    );
}

export default PreferencesForm;
