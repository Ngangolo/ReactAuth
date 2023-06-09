import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
const EntrepreneurLayout = ({ children }) => {

    return (
        <>
            <Header />
            <Sidebar />
            <div className="m-2">
                {children}
            </div>
            <Footer />
        </>
    );

}

export default EntrepreneurLayout;

