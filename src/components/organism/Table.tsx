import BodyTable from "../molecules/BodyTable";
import MoreInfo from "../molecules/MoreInfo";
import'../../assets/style/Table.css'
function Table() {


    return (
        <>
        {/* Modal */}
        <MoreInfo/>
        {/*  */}
        <div className="Container">
        <div className="table-responsive">
            <table className="table table-striped table-dark table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido Paterno</th>
                        <th scope="col">Apellido Materno</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Informacion Completa</th>
                    </tr>
                </thead>
                <tbody>
                    <BodyTable/>
                </tbody>
            </table>
            </div>
            </div>
        </>
    );
}
export default Table;
