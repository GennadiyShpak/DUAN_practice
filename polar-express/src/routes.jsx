import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App.jsx'
import Services from './components/Services/Services.jsx';
import Home from './components/MainPage/MainPage.jsx';
import Tracking from './components/Tracking/Tracking.jsx';
import Shiping from './components/Shiping/Shiping.jsx';


const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Navigate to="/home" replace />,
                index: true,
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: 'tracking',
                element: <Tracking/>
            },
            {
                path: 'shiping',
                element: <Shiping/>,
                children: [
                    {
                        path: 'products',
                        element: <h2>Shiping details</h2>
                    },
                    {
                        path: 'history',
                        element: <h2>Shiping history</h2>
                    }
                ]
            }
        ]
    }
];


const router = createBrowserRouter(routes);

export default router;
