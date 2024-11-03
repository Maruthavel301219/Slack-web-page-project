import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import {Routes,Route} from 'react-router-dom'

const Routing = () => {
    return (
        <div className='routingparent'>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/login' Component={Login}></Route>
                <Route path='/signup' Component={Signup}></Route>
                <Route path='/cart' Component={Cart}></Route>
            </Routes>
            
        </div>
    );
}

export default Routing;
