import React from 'react';


const Cake = (props) => {
   
    const cakemapfun = props.cakedata && props.cakedata.length > 0 && props.cakedata.map((items, index) => {
        
        
        return (
            <div className='cakeparents' key={index}>
                <img className='allcakeproducts' src={require(`../../assets/cake_items/${items.Image}`)}alt='cakeitems' /><br/>
                <button> Add to cart</button>
            </div>
        );
    });

    return (
        <div className='allcakeproductsparent' >
            {cakemapfun}
        </div>
    );
}

export default Cake;
