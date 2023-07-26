import Modify from "../molecules/Modify";
import Delete from "../molecules/Delete";
import NewUser from "../molecules/NewUser";
function Nav() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">ClientHub</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#ModalModify">
                                Modificar
                            </button>

                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#ModalDelete">
                                Borrar
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalNewUser">
                                Nuevo Usuario
                            </button>
                        </li>

                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
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

export default Nav;
