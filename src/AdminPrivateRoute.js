import React, { useState, useEffect } from 'react';
import { useNavigate,} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AdminPrivateRoute({ ...rest }) {
    const location = useLocation();

    const navigate = useNavigate();

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        axios.get(`/api/checkingAuthenticated`).then(res => {
            if (res.status === 200) {
                setAuthenticated(true);
            }
            setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if (err.response.status === 401) {
            swal("Unauthorized", err.response.data.message, "warning");
            navigate('/login');
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status === 403) // Access Denied
        {
            swal("Forbidden", error.response.data.message, "warning");
            navigate('/403');
        }
        else if (error.response.status === 404) //Page Not Found
        {
            swal("404", "Page Not Found", "warning");
            navigate('/404');
        }
        return Promise.reject(error);
    }
    );

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
                // localStorage.getItem('auth_token')
                 Authenticated
                ? <Outlet /> // routes imbriquées rendues ici
               : (<Navigate to="/login" replace state={{ from: location }} />)

    );
}

export default AdminPrivateRoute;