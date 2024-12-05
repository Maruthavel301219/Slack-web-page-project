import React, { useState, useEffect } from 'react';
import './weblogin.css'

const Loginui = ({ validationsatus }) => {

    const [visiblesignup, setVisiblesignup] = useState(false);

    const [signupaobj, setSignupobj] = useState({
        name: '',
        email: '',
        password: '',
        phonenumber: ''
    });

    const [signuparr, setSignuparr] = useState([]);

    const [loginobj, setLoginobj] = useState(
        {
            email: '',
            password: ''
        }
    )


    const accesssignup = () => {
        setVisiblesignup(true);
    }


    useEffect(() => {
        const storeddata = localStorage.getItem('userdata');
        if (storeddata) {
            
            setSignuparr( JSON.parse(storeddata));
        }

    }, []);

    const loginchanger = (Event) => {
        const { name, value } = Event.target;
        setLoginobj((prev) =>({...prev,[name]:value}));
    }

    const loginhandler = () => {
        if (!loginobj.email || !loginobj.password) {
            alert('please enter the all detailse before login');
            return;
        }



        const isvaliduser = signuparr.some((item)=>item.email === loginobj.email && item.password === loginobj.password);

                if(isvaliduser){
                    validationsatus(true);
                }
                else {
                    alert('please signup yor detaise before login');
                    validationsatus(false);
                }
            
        };
    


    const signuphandler = (Event) => {
        const { name, value } = Event.target;
        setSignupobj((previousevalue) => {
            return (
                {
                    ...previousevalue, [name]: value
                }
            )

        })

    }


    const signupsubmit = () => {


        if (!signupaobj.name || !signupaobj.email || !signupaobj.password || !signupaobj.phonenumber) {
            alert('please fill the all detailse before signup');
            return;
        }

        else {
            const newuser = { ...signupaobj };
            const updateuserdata = [...signuparr, newuser];
            const stringconversion = JSON.stringify(updateuserdata);
            localStorage.setItem('userdata', stringconversion);
            setSignuparr(updateuserdata);
            setSignupobj({
                name: '',
                email: '',
                password: '',
                phonenumber: ''
            });
            alert('registration is complete success fully!');
            setVisiblesignup(false);

        }
    }

    const hadlesubmite = (Event) => {
        Event.preventDefault();
        signupsubmit();
    };

    return (
        <div className='authendicationparent'>
            <div className='authendicationtemplate'>
                <div>
                    {!visiblesignup ?
                        (<div className='logintemplate'>
                            <h1 className='loginwelcom'>Welcom Mass bakery</h1>
                            <input
                                onChange={loginchanger}
                                placeholder='Enter yor email ID'
                                type='email'
                                name='email' />
                            <input
                                placeholder='Enter your password'
                                onChange={loginchanger}
                                type='password'
                                name='password' /><br />
                            <button onClick={loginhandler} className='loginbutton' type='button'> Login</button>
                            <p className='forgettext'>Don't have an account? <span onClick={accesssignup} className='siginuptext'>Sign up</span></p>
                        </div>) : (<div className='signuptemplate'>
                            <h1 className='signinnwelcom'>Welcom Mass bakery</h1>
                            <form onSubmit={hadlesubmite}>
                                <input
                                    placeholder='Enter your name'
                                    id='signupname'
                                    name='name'
                                    onChange={signuphandler} type='text'
                                    value={signupaobj.name} />
                                <input
                                    placeholder='Enter your email ID'
                                    id='signupemail'
                                    name='email'
                                    onChange={signuphandler} type='email'
                                    value={signupaobj.email} />

                                <input
                                    placeholder='Enter your password'
                                    id='signuppassword'
                                    name='password'
                                    onChange={signuphandler}
                                    value={signupaobj.password}
                                    type='password' />

                                <input
                                    placeholder='Enter your phonenumber'
                                    id='signupphonenumber'
                                    name='phonenumber'
                                    onChange={signuphandler}
                                    type='number'
                                    value={signupaobj.phonenumber} /><br />
                                <button
                                    id='signupsubmit'
                                    type='submit'>Signup</button>
                            </form>
                        </div>)}
                </div>
            </div>
        </div>
    );

}

export default Loginui;




