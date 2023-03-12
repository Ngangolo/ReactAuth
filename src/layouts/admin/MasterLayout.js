import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Navbar from './Navbar';

import routes from '../../routes/routes';

  const MasterLayout = ({ children }) => {

    return (
        <>
            <Navbar />

            <div className="m-2">
                {children}
            </div>

            {/* <main>

                <Routes>

                    {routes.map((route, idx) => {
                        return (
                            route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <route.component {...props} />
                                    )}
                                />
                            )
                        )
                    })}
                    <Navigate from="/admin" to="/admin/dashboard" />
                </Routes>

            </main> */}
        </>
    );

}

export default MasterLayout;