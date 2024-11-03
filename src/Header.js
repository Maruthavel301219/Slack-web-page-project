import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='headparent'>
        <div className='header flexiblealign'>
          {/* <h1 className='logo'>MASS BAKERY</h1> */}
          <img className='logo' src={require('./assets/lables/logo.jpg')} alt='logo'/>
          <input placeholder='Serch items' className='serchbar' type='text'/>
          <div className='headernavigations'>
            <button><Link to='/'>HOME</Link></button>
            <button> <Link to='/login'>LOGIN</Link></button>
            <button> <Link to='/signup'>SIGNUP</Link></button>
            <button> <Link to='/cart'>CART</Link></button>
          </div>
        </div>
      </div>
      <div className='welcomparent'>
        <marquee direction='right' className='welcomtext flexiblealign'> Welcom mass bakery "
          big diwali sales all products 20% discount per kg"  </marquee>
      </div>
    </div>
  );
}

export default Header;
