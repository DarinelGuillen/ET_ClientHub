function AddresForm() {
    return ( 
        <>
        <form>
            <div className="Container_FormGroup">
                <div className="form-group">
                    <label htmlFor="street">Calle</label>
                    <input type="text" className="form-control" id="street" placeholder="Ingrese su dirección" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="exteriorNumber">Número exterior</label>
                        <input type="text" className="form-control" id="exteriorNumber" placeholder="Ingrese número exterior" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="interiorNumber">Número interior</label>
                        <input type="text" className="form-control" id="interiorNumber" placeholder="Ingrese número interior" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="neighborhood">Colonia</label>
                        <input type="text" className="form-control" id="neighborhood" placeholder="Ingrese su colonia" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="municipality">Municipio</label>
                        <input type="text" className="form-control" id="municipality" placeholder="Ingrese su municipio" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="state">Estado</label>
                        <input type="text" className="form-control" id="state" placeholder="Ingrese su estado" />
                    </div>
                </div>
            </div>
        </form>
        </>
     );
}

export default AddresForm;