import { createBrowserRouter } from "react-router-dom"
import Home from "../../components/pages/Home/Home";
import Movie from "../../components/pages/MovieList";

const router = createBrowserRouter([
    {
        index: true,
        element:<Home /> 
    }
   
    ])


export default router;

