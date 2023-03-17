import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarExpert from './SidebarExpert';
const ExpertLayout = ({ children }) => {

    return (
        <>
            <Header />
            <SidebarExpert />
            <div className="m-2">
                {children}
            </div>
            <Footer />
        </>
    );

}

export default ExpertLayout;

