import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Searchitem from './Searchproduct';
import { connect } from 'react-redux';

const Header = (props) => {

  const [searchitem, setSearchitem] = useState('');
  const [issticky, setSticky] = useState(false);

  useEffect(() => {
    const handlescrole = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      }

      else { setSticky(false); }
    }

    window.addEventListener('scroll', handlescrole);

    return () => {
      window.removeEventListener('scroll', handlescrole);
    }
  }, []);

  return (

    <div className={`${issticky ? 'stickyheader' : ''}`}>
      <div style={{ marginBottom: searchitem.length > 0 ? '55px' : '22px' }} className='headparent' >
        <div className='header flexiblealign'>
          <img className={`logo ${issticky ? 'stickylogo' : ''}`} src={require('./assets/lables/logo.PNG')} alt='logo' />
          <FaMagnifyingGlass className='searchglass' />
          <input placeholder='" Satisfy your sweet tooth – search now! "'
            className='searchbar'
            type='search' onChange={(Event) => {
              setSearchitem(Event.target.value);
            }} />
          <div className='headernavigations'>
            <button type='button'><Link to='/'>HOME</Link></button>
            <button type='button'> <Link to='/cart'>
            <FaShoppingCart className='cartlink'/>
            <span className='cartvalue'>{props.cartvalue.length}</span></Link></button>
          </div>
        </div>
      </div>
      <div style={{ boxShadow: searchitem.length > 0 ? '0px 0px 8px -3px' : 'none' }} className='dynamicproducts'>
        <Searchitem searchitem={searchitem} />
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
      cartvalue:state.cartvalue
 }  
}

export default connect(mapStateToProps)(Header);
