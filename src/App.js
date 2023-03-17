import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './layouts/authentification/Register';
import Login from './layouts/authentification/Login';
import AdminPrivateRoute from './AdminPrivateRoute';
import EntrepreneurPrivateRoute from './EntrepreneurPrivateRoute';
import ExpertPrivateRoute from './ExpertPrivateRoute';
import routes from './routes/routes';
import entrepreneurRoute from './routes/EntrepreneurRoute';
import expertRoute from './routes/ExpertRoute';
import publicRoutes from './routes/Publicroutes';
// import Home from './layouts/frontend/Home';


import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


axios.defaults.withCredentials = true;


axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
         
          <Route element={<AdminPrivateRoute />} >
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<ExpertPrivateRoute />} >
            {expertRoute.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<EntrepreneurPrivateRoute />} >
            {entrepreneurRoute.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>

          <Route  >
            {publicRoutes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>

          <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Login />} >
          </Route>

          <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Register />} >
          </Route>

        </Routes>
      </Router>
    </div>
  );
}


export default App;