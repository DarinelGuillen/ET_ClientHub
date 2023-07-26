

function BodyTable() {


    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>Cristian DARINEl</td>
                <td>ESCOBAR</td>
                <td>Guillen</td>
                <td>19</td>
                <td>Masculino</td>
                <td>
                    <p>
                    <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Más Info
                    </a>
                    </p>
                    <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                    </div>
                    {/* <button type="button" className="btn btn-info btn-block">Más Info</button> */}
                    </td>
            </tr>
            
        </>
    );
}
export default BodyTable;
