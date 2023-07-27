import React, { useRef } from 'react';
import '../../assets/style/FormUser.css';

function FormNewUser() {
    const formDataRef = useRef<HTMLFormElement>(null);

    const handleGuardar = (e: any) => {
        e.preventDefault();
        if (!formDataRef.current) return;
        const formData = new FormData(formDataRef.current);

        // Obtener los valores de los campos del formulario
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const motherLastName = formData.get('mother_lastName');
        const age = formData.get('age');
        const gender = formData.get('gender');
        const street = formData.get('street');
        const exteriorNumber = formData.get('exteriorNumber');
        const interiorNumber = formData.get('interiorNumber');
        const neighborhood = formData.get('neighborhood');
        const municipality = formData.get('municipality');
        const state = formData.get('state');
        const roomtype = formData.get('roomtype');
        const income = formData.get('income');
        const trips = formData.get('trips');

        // Checkboxes for hobbies
        const hobbyMusic = formData.has('hobbyMusic') ? formData.get('hobbyMusic') : '';
        const hobbyMovies = formData.has('hobbyMovies') ? formData.get('hobbyMovies') : '';
        const hobbyModeling = formData.has('hobbyModeling') ? formData.get('hobbyModeling') : '';
        const hobbyShopping = formData.has('hobbyShopping') ? formData.get('hobbyShopping') : '';

        // Checkboxes for destinations
        const destinationDesert = formData.has('destinationDesert') ? formData.get('destinationDesert') : '';
        const destinationBeach = formData.has('destinationBeach') ? formData.get('destinationBeach') : '';
        const destinationCity = formData.has('destinationCity') ? formData.get('destinationCity') : '';
        const destinationMountain = formData.has('destinationMountain') ? formData.get('destinationMountain') : '';

        // Checkboxes for books
        const bookRomance = formData.has('bookRomance') ? formData.get('bookRomance') : '';
        const bookNovel = formData.has('bookNovel') ? formData.get('bookNovel') : '';
        const bookFantasy = formData.has('bookFantasy') ? formData.get('bookFantasy') : '';
        const bookPolitics = formData.has('bookPolitics') ? formData.get('bookPolitics') : '';
        const bookCientific = formData.has('bookCientific') ? formData.get('bookCientific') : '';


        const formDataObj = {
            firstName,
            lastName,
            motherLastName,
            age,
            gender,
            street,
            exteriorNumber,
            interiorNumber,
            neighborhood,
            municipality,
            state,
            hobby: {
                music: hobbyMusic,
                movies: hobbyMovies,
                modeling: hobbyModeling,
                shopping: hobbyShopping,
            },
            destinations: {
                desert: destinationDesert,
                beach: destinationBeach,
                city: destinationCity,
                mountain: destinationMountain,
            },
            roomtype,
            income,
            trips,
            books: {
                romance: bookRomance,
                novel: bookNovel,
                fantasy: bookFantasy,
                politics: bookPolitics,
                cientific: bookCientific,
            },
        };

        (formDataObj);
    };
    return (
        <>
            <div className="modal-body">
                <form ref={formDataRef}>
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

                    <div className="Container_FormGroup">
                        {/* Dirección */}
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
                        {/* Fin de la dirección */}

                        {/* Preferencias */}
                        <div className="form-group">
                            <label htmlFor="hobby">Intereses personales</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="hobbyMusic" value="Música" />
                                <label className="form-check-label" htmlFor="hobbyMusic">
                                    Música
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="hobbyMovies" value="Cine" />
                                <label className="form-check-label" htmlFor="hobbyMovies">
                                    Cine
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="hobbyModeling" value="Modelado" />
                                <label className="form-check-label" htmlFor="hobbyModeling">
                                    Modelado
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="hobbyShopping" value="Compras" />
                                <label className="form-check-label" htmlFor="hobbyShopping">
                                    Compras
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
                            <label htmlFor="roomtype">Tipo de habitación</label>
                            <select className="form-control" id="roomtype">
                                <option value="N/A">selecione</option>
                                <option value="Casa propia">Casa propia</option>
                                <option value="Departamento">Departamento</option>
                                <option value="Renta">Renta</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="income">Ingreso Mensual</label>
                            <select className="form-control" id="income">
                                <option value="N/A">selecione</option>
                                <option value="2,500—5,000">2,500 — 5,000</option>
                                <option value="5,001—7,000">5,001 — 7,000</option>
                                <option value="7,001—10,000">7,001 — 10,000</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="trips">Viajes realizados durante el año</label>
                            <select className="form-control" id="trips">
                                <option value="1-3">1—3</option>
                                <option value="4-6">4—6</option>
                                <option value="7-10">7-10</option>
                            </select>
                        </div>

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
                        {/* Fin de las preferencias */}
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-success" onClick={handleGuardar}>Guardar</button>
            </div>
        </>
    );
}

export default FormNewUser;
