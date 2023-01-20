import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])
export default Router;