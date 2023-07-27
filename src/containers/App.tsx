import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState } from "react";
import Home from '../pages/Home'
import UserContext from "../contexts/UserContext";
import UserCurrenIdContext from '../contexts/UserCurrenIdContext';
function App() {
  const [usersData, setUsersData] = useState([]);
  const [currenUser, setCurrenUser] = useState([]);



  return (
    <BrowserRouter>
      <UserContext.Provider value={{ usersData, setUsersData }}>
        <UserCurrenIdContext.Provider value={{ currenUser, setCurrenUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </UserCurrenIdContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
