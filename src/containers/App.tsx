import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import Home from '../pages/Home'
import UserContext from "../contexts/UserContext";
import CurrenUserContext from '../contexts/CurrenUserContext';
function App() {
  const [usersData, setUsersData] = useState<any>([]);
  const [currenUser, setCurrenUser] = useState<any>([]);



  return (
    <BrowserRouter>
      <UserContext.Provider value={{ usersData, setUsersData }}>
        < CurrenUserContext.Provider value={{ currenUser, setCurrenUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ CurrenUserContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
