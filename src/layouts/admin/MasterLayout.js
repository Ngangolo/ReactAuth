import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarAdmin from './SidebarAdmin'
const MasterLayout = ({ children }) => {

    return (
        <>
            <Header />
            <SidebarAdmin />
            <div className="m-2">
                {children}
            </div>
            <Footer />
        </>
    );

}

export default MasterLayout;

