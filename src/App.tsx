
import { RouterProvider } from 'react-router-dom'
import router from "./app/router-dom/AppRouter"
import './App.css'


const App = () => {
  
  return (
    <RouterProvider router = {router} />
  )
}

export default App
