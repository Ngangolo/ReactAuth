import React from 'react'
import { Link } from "react-router-dom";
import { Home } from '@material-ui/icons';
import { Logout } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function SidebarExpert() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="index3.html" className="brand-link">
                    {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" /> */}
                    <img className="brand-image img-circle elevation-3" src={process.env.PUBLIC_URL + '/images/img3.png'} alt="DigiCtract Logo" />
                    <span className="brand-text font-weight-light">DigiContract</span>
                </a>
                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image"> 
                            <img src={process.env.PUBLIC_URL + '/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{localStorage.getItem('auth_name')}</a>
                        </div>
                    </div>

                    {/* <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item menu-open">
                                <Link to="/" className="nav-link active ">
                                    <Home />
                                    <p>
                                        Dashboard

                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link ">

                                    <LibraryBooksIcon />
                                    <p>
                                       Articles
                                    </p>

                                </Link>
                            </li>
                           
                            <li className="nav-item">
                            <Link to="/" className="nav-link ">
                                    <EmailIcon />
                                    <p>
                                    Messages
                                    </p>
                            </Link>
                            </li>
                     
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    <Logout />
                                    <p>
                                        Deconnexion
                                    </p>
                                </a>
                            </li>



                        </ul>
                    </nav>

                </div>

            </aside>

        </>
    )
}

export default SidebarExpert