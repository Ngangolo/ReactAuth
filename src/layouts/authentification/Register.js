import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';


function Register() {

    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    // localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('auth_user',JSON.stringify(res.data.user) );                    swal("Success", res.data.message, "success");
                    navigate('/dashboardEntrepreneur');
                }
                else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            });
        });
    }

    return (
        <div>
            <div class="hold-transition register-page">
                <div class="register-box">
                    <div class="card card-outline card-primary">
                        <div class="card-header text-center">
                            {/* <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a> */}
                            <img className="img-radius" width="250" height="80" src={process.env.PUBLIC_URL + '/images/img2.png'} />
                        </div>
                        <div class="card-body">
                            <h4 class="login-box-msg"> <b>Inscription </b> </h4>
                            <form onSubmit={registerSubmit}>
                                <div class="input-group mb-3">
                                    <input type="text" name="name" onChange={handleInput} value={registerInput.name} class="form-control" placeholder="name" />
                                    <span>{registerInput.error_list.name}</span>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" name="email" onChange={handleInput} value={registerInput.email} class="form-control" placeholder="Email" />
                                    <span>{registerInput.error_list.email}</span>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" name="password" onChange={handleInput} value={registerInput.password} class="form-control" placeholder="Password" />
                                    <span>{registerInput.error_list.password}</span>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Retype password"/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                </div> */}
                                <div class="row">
                                    <div class="col-8">
                                        <div class="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                            <label for="agreeTerms">
                                                I agree to the <a href="#">terms</a>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <button type="submit" class="btn btn-primary btn-block">Register</button>
                                    </div>

                                </div>
                            </form>
                            {/* <div class="social-auth-links text-center">
                <a href="#" class="btn btn-block btn-primary">
                    <i class="fab fa-facebook mr-2"></i>
                    Sign up using Facebook
                </a>
                <a href="#" class="btn btn-block btn-danger">
                    <i class="fab fa-google-plus mr-2"></i>
                    Sign up using Google+
                </a>
            </div> */}
                            <Link to="/login" className="nav-link text-center">
                                J'ai déjà un compte me conecter
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;