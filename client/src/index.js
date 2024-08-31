import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home/Home'
import AddWatchPage from './views/AddWatchPage/AddWatchPage'
import EditPage from './views/EditPage/EditPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add",
        element: <AddWatchPage />
    },
    {
        path: "/edit/:id",
        element: <EditPage />
    },
    {
        path:"*",
        element:<h1>404 Not Found</h1>
    }
])

root.render(<RouterProvider router={router} />)
