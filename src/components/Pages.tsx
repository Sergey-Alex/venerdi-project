import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Auth/Login/Login";
import ErrorPage from "./ErrorPage/ErrorPage";
import SuperTestComponent from "./TestComponents/SuperTestComponent";
import PasswordRecovery from "./Auth/passwordRecovery/PasswordRecovery";
import BasePage from "./BasePage/BasePage";
import Profile from "./Profile/Profile";
import NewPassword from "./Auth/newPassword/NewPassword";

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<BasePage/>}/>
                <Route path='/super' element={<SuperTestComponent/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/recovery' element={<PasswordRecovery/>}/>
                <Route path='/newpassword' element={<NewPassword/>}/>
                <Route path='/supercomponents' element={<SuperTestComponent/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
};

export default Pages;