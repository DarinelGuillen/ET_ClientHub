function UsersForm() {
    return ( 
        <>
        <form>
        <div className="Container_FormGroup">
                        <div className="form-group">
                            <label htmlFor="firstName">Nombre</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Ingrese su nombre" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Apellido paterno</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Ingrese su apellido paterno" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="mother_lastName">Apellido materno</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mother_lastName"
                                    placeholder="Ingrese su apellido materno"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="age">Edad</label>
                                <input type="number" className="form-control" id="age" placeholder="Ingrese su edad" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="gender">Género</label>
                                <select className="form-control" id="gender">
                                    <option value="N/A">selecione</option>
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