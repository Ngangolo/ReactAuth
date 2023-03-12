import Home from '../components/frontend/Home';
import Page403 from '../components/PageErrors/Page403';
import Page404 from '../components/PageErrors/Page404';
import Register from '../components/frontend/authentification/Register';
import Login from '../components/frontend/authentification/Login';


const publicRoutes = [
{ path: '/', exact: true, name: 'Home', component: Home },
{ path: '/403', exact: true, name: 'Page403', component: Page403 },
{ path: '/404', exact: true, name: 'Page404', component: Page404 },
{ path: '/login', exact: true, name: 'Login', component: Login },
{ path: '/register', exact: true, name: 'Register', component: Register },
];

export default publicRoutes;