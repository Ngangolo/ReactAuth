import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    // useEffect(() => {
    //     if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
    //         navigate("/dashboard");
    //     }
    //     console.log(localStorage.getItem('token'))
    // }, [])

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    // localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('auth_user',JSON.stringify(res.data.user) );
                    //    swal("Success", res.data.message, "success");
                    if (res.data.role === 'admin') {
                        navigate('/admin/dashboardAdmin');
                    }
                    else if (res.data.role === 'expert') {
                        navigate('/dashboardExpert');
                    }
                    else {
                        navigate('/dashboardEntrepreneur');
                    }
                }
                else if (res.data.status === 401) {
                    // swal("Warning", res.data.message, "warning");
                    console.warn(res.data.message);
                }
                else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });
        });

    }

    return (
        <div>
            <div class="hold-transition login-page">
                <div class="login-box">

                    <div class="card card-outline card-primary">
                        <div class="card-header text-center">
                            {/* <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a> */}
                            <img className="img-radius" width="250" height="80" src={process.env.PUBLIC_URL + '/images/img2.png'} />
                        </div>
                        <div class="card-body">
                            <h4 class="login-box-msg"> <b>Connexion </b> </h4>
                            <form onSubmit={loginSubmit}>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Email" name="email" onChange={handleInput} value={loginInput.email} />
                                    <span>{loginInput.error_list.email}</span>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" name="password" onChange={handleInput} value={loginInput.password} placeholder="Password" />
                                    <span>{loginInput.error_list.password}</span>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div class="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label for="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <button type="submit"
                                            class="btn btn-primary btn-block"
                                        >
                                            Login

                                        </button>
                                    </div>

                                </div>
                            </form>

                            <p class="mb-1">
                                <a href="forgot-password.html"> mot de passe oublié?</a>
                            </p>
                            <Link to="/register" className=" text-center">
                                Je n'ai pas de compte m'inscrire ?
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;