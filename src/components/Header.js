import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import Head from './Head';

function Header() {

    const navigate = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_user');
                // swal("Success", res.data.message, "success");
                navigate('/');
            }
        });
    }

    return (
        <>
        <Head/>
            {/* <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </div> */}

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i className="fas fa-search"></i>
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="dropdown-item">

                                <div className="media">
                                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>

                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">

                                <div className="media">
                                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>

                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">

                                <div className="media">
                                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>

                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            className="nav-link dropdown-toggle">
                            <img alt="" class="   img-circle  " width="30" height="30" src={process.env.PUBLIC_URL + '/dist/img/user2-160x160.jpg'}/>
                        </a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                            <li><a href="{{ route('profil.path') }}" class="dropdown-item">Profil</a></li>
                            <li><a href="{{ route('admin_home.path') }}" class="dropdown-item">mes factures</a></li>
                            <li><a href="{{ route('link.logout') }}" class="dropdown-item">Deconnexion</a></li>
                        </ul>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true">
                            <img alt="" class="img-circle mr-1" width="30" height="30" src={process.env.PUBLIC_URL + '/dist/img/user2-160x160.jpg'} />
                            <strong style={{color:"black"}}>  { JSON.parse(localStorage.getItem('auth_user')).name}</strong>
                           
                        </a>
                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                Profile
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                mes facture
                            </a>
                            {/* <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                Deconnexion
                            </a> */}
                            <li className="nav-item">
                                <li><Link className="dropdown-item" onClick={logoutSubmit}>Deconnexion</Link></li>
                            </li>
                        </ul>
                    </li>


                </ul>
            </nav>


        </>
    )
}

export default Header