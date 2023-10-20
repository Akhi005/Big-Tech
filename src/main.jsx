import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTechnology from './components/AddTechnology.jsx';
import UpdateTechnology from './components/UpdateTechnology.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Home from './components/Home.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import MyCart from './components/MyCart.jsx';
import DetailsCard from './components/DetailsCard.jsx';
import Product from './components/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('http://localhost:5000/tech')
  },{
    path: "/app",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/tech')
  },{
    path: "/addtechnology",
    element: <PrivateRoute><AddTechnology></AddTechnology></PrivateRoute>,
    
  },{
    path: "/updatetechnology/:id",
    element: <UpdateTechnology></UpdateTechnology>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.id}`)
  },{
    path:"/signin",
    element:<SignIn></SignIn>
  },{
    path:"/signup",
    element:<SignUp></SignUp>
  },{
    path:"/users",
    element:<Users></Users>,
    loader:() => fetch('http://localhost:5000/user') 
  },{
    path:"/mycart",
    element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/app/${params.id}`)
  },
  {
    path:"/DetailsCard/:id",
    element:<PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.id}`)
  },{
    path:"/product/:brand",
    element:<Product></Product>,
    loader:({params})=>fetch(`http://localhost:5000/tech/${params.brand}`)
  }
   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)