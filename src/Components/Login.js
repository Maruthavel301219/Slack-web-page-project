import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from '../Header';
import Routing from '../Routing'
import Footer from "../Footer";
import Loginui from './Loginui';
import store from '../Store'
import { Provider } from 'react-redux';

const Login = () => {
    const [satus, setSatus] = useState(false);
    const [loader, setLoader] = useState(true);


    const validationsatus = (value) => {
        setSatus(value);
        return;

    }

    useEffect(() => {
        if (satus) {
            setTimeout(() => {
                setLoader(false);
            }, 4000);
        }
    }, [satus]);



    return (
        <div>
            {!satus ? (<Loginui validationsatus={validationsatus} />) : loader ?
                (<span id="loader">Loading....</span>) :
                 (<Provider store={store}>
                     <BrowserRouter>
                         <Header />
                         <Routing />
                         <Footer />
                     </BrowserRouter>
                 </Provider>
                )}
        </div>
    );
}

export default Login;





