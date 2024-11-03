import React, { useEffect, useState } from 'react';
import mixturemodel from '../assets/mixture_items/Cornflakes.jfif'
import sweetmodel from '../assets/sweet_items/Gulab Jamun.jfif'
import Cake from './pages/Cake';
import Mixture from './pages/Mixture'
import Sweet from './pages/Sweet'

const Home = () => {

    const[cakedata,setCakedata]=useState([]);
    const[mixturedata,semixturedata]=useState([]);
    const[sweetdata,setsweetdata]=useState([]);
    



    const cakeitems=[
         {Image:'aclassicgerman.webp'},
        {Image:'AfterNine.webp'},
        {Image:'black-forest.webp'},
        {Image:'captain-america-.webp'},
        {Image:'choco-truffle.webp'},
        {Image:'custom-diwali.webp'},
        {Image:'DarkChocolateMousseCake.webp'},
        {Image:'Dense_Loaf_Truffle.webp'},
        {Image:'FreshCreamPineapple.webp'},
        {Image:'Freshfruitandcreamcake.webp'},
        {Image:'Lemon Lovers Pound Cake.jfif'},
        {Image:'photo-pulling-blueberry.webp'},
        {Image:'sq-chocolate-diwali.webp'},
        {Image:'sq-mickey_mouse.webp'},
        {Image:'sq-one-number.webp'},
        {Image:'squ-angelic-beauty-photo.webp'},
        {Image:'squ-chennai-super-kings.webp'},
        {Image:'traditionalwedding_cake.webp'}];

    const mixtureitems=[{Image:'../assets/mixture_items/Kanda Batata Poha.jfif'}]

    const sweetitems=[{image:'../assets/sweet_items/Balushahi Recipe.jfif'}]

    const cakefun = ()=>{
        setCakedata(cakeitems)
        setsweetdata([])
        semixturedata([])
        console.log(cakedata)
    }

    const sweetfun = ()=>{
        setCakedata([])
        setsweetdata(sweetitems)
        semixturedata([])
    }

    const mixturefun = ()=>{
        setCakedata([])
        setsweetdata([])
        semixturedata(mixtureitems)
    }

    return (
        
       <div>
         <div className='modelitems'>
           <div>
            <img className='productimage' src={require('../assets/cake_items/traditionalwedding_cake.webp')} alt='cakemodel' /><br/>
           <button onClick={cakefun} type='button'> view more</button></div>
            <div><img className='productimage' src={mixturemodel} alt='mixturemodel' /><br />
                <button onClick={mixturefun} type='button'> view more</button>
            </div>
            <div><img className='productimage' src={sweetmodel} alt='sweetmodel' /><br />
                <button onClick={sweetfun} type='button'> view more</button>
            </div>
        </div>
        <Cake cakedata={cakedata}/>
        <Mixture mixturedata={mixturedata}/>
        <Sweet sweetdata={sweetdata}/>
       
       </div>
    );
}

export default Home;
