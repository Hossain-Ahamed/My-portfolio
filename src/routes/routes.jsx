
import { createBrowserRouter } from 'react-router-dom';
import Home from '../layouts/Home';
import App from '../Pages/App';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                index: true,
                element: <App/>
            },
        
        ]
    },
    {
        path: '*',
        element: <>404 not found</>
    }
])

export const router = routes;