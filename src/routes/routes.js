import Dashboard from '../layouts/admin/Dashboard';
// import UserDashboard from '../layouts/frontend/Dashboard';
// import Profile from '../components/admin/Profiles';
// import Login from '../components/frontend/frontend/Auth/Login';
// import Register from '../components/frontend/frontend/Auth/Register';

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    // { path: 'dashboard', exact: true, name: 'UserDashboard', component: UserDashboard },

    // { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
    // { path: '/admin/login', exact: true, name: 'Login', component: Login },
    // { path: '/admin/register', exact: true, name: 'Register', component: Register },

];

export default routes;