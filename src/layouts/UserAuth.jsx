import React from 'react';
import HeaderNavbar from '../pages/shared/HeaderNavbar';
import { Outlet } from 'react-router-dom';

const UserAuth = () => {
    return (
        <div>
            <HeaderNavbar />
            <Outlet />
        </div>
    );
};

export default UserAuth;