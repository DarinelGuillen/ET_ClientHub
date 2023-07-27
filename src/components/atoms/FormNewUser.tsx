
import { useContext } from "react";
import UsersForm from '../Particle/usersForm';
import AddresForm from '../Particle/AddresForm';
import PreferencesForm from '../Particle/PreferencesForm';

import CurrenUserContext from '../../contexts/CurrenUserContext';
import '../../assets/style/FormUser.css';

function FormNewUser() {
    const { currenUser, setCurrenUser } = useContext(CurrenUserContext);

    return (
        <>
            <div>
                <UsersForm />
                <AddresForm />
                <PreferencesForm />
            </div>

        </>
    );
}

export default FormNewUser;
