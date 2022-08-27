import Following from '../Pages/Following/Following';
import Home from '../Pages/Home/Home';
import Upload from '../Pages/Upload/Upload';
import Profile from '../Pages/Profile/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload },
    { path: '/profile', component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
