import React from 'react';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {Routes,Route} from 'react-router-dom'

const Routing = () => {
    return (
        <div className='routingparent'>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/cart' Component={Cart}></Route>
            </Routes>
            
        </div>
    );
}

export default Routing;
