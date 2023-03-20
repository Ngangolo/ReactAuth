import DashboardAdmin from '../layouts/admin/DashboardAdmin';
import ListeUtilisateurs from '../layouts/admin/utilisateurs/ListeUtilisateurs';
import ListeServices from '../layouts/admin/servicesDossiers/ListeServices';
// import Profile from '../components/admin/Profiles';


const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboardAdmin', exact: true, name: 'DashboardAdmin', component: DashboardAdmin },
    { path: '/listeUtilisateurs', exact: true, name: 'ListeUtilisateurs', component: ListeUtilisateurs },
    { path: '/listeServices', exact: true, name: 'ListeServices', component: ListeServices },

    // { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
   

];

export default routes;