import '../../assets/style/FormUser.css'
function FormUser() {
  return (
   <>
    <form>
    <div className="Container_FormGroup">
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" defaultValue={""} />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" defaultValue={""} />
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="age">Age</label>
            <input type="text" className="form-control" id="age" defaultValue={""} />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender" defaultValue={""}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </div>
        </div>
    </div>
    <div className="Container_FormGroup">
        {/* Here goes  */}
    </div>
    <div className="Container_FormGroup">

    </div>
    </form>

   </>
  );
}

export default FormUser;
