import {createBrowserRouter} from 'react-router-dom';
import Default from '../screens/Default';
import Tabla from '../screens/Tabla';
import Login from '../screens/forms/LoginForm';
import App from '../App';

const routes = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/tabla',
                element: <Tabla />,
            },
            {
                path: '/login',
                element: <Login />,
            }
        ],
    }
]);

export default routes;
