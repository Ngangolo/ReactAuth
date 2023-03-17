import DashboardEntrepreneur from '../layouts/entrepreneur/DashboardEntrepreneur';
import DocumentListe from '../layouts/entrepreneur/document/DocumentListe';
import MultiStep from '../layouts/entrepreneur/document/MultiStep';

const EntrepreneurRoute = [
{ path: '/dashboardEntrepreneur', exact: true, name: 'DashboardEntrepreneur', component: DashboardEntrepreneur },
{ path: '/documentListe', exact: true, name: 'DocumentListe', component: DocumentListe },
{ path: '/multiStep', exact: true, name: 'MultiStep', component: MultiStep },

];

export default EntrepreneurRoute;