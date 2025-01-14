import { createBrowserRouter } from "react-router-dom"
import Home from "../../pages/home/Home"

const router = createBrowserRouter([
    {
        index: true,
        element:<Home /> 
    }
   
    ])


export default router;

