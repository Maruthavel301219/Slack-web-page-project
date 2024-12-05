import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_to_cart } from '../actions/action';


const Cart = (props) => {

    const[itemqty,setItemqty]=useState(1)
    const remove_dispatch= useDispatch();
    const selectcartvalue=useSelector((state)=>state.cartvalue);

    const increseqty = ()=>{
        setItemqty((prev)=>{
            
            return prev+1;
        })
    };
     
    const dencreseqty = ()=>{
        if(itemqty>1){
            setItemqty((prev)=>{
                return prev-1;
            })
        }
    }
    const mapcartitems= selectcartvalue && selectcartvalue.length>0 && selectcartvalue.map((items)=>{
        return(
            <div key={items.id} className='cartitemparent'>
                <img className='allcartproducts' src={require(`../assets/${items.Image}`)} alt={`${items.itemname}`}/>
                <ul className='cartdetails'>
                    <li>{items.itemname}</li>
                    <li>{items.itemprice}</li>
                    <li><span onClick={increseqty}>+</span><span onClick={dencreseqty}>-</span></li>
                    <li>{itemqty}kg</li>
                    <li><button title='remove' onClick={()=>{remove_dispatch(remove_to_cart(items.id))}}>remove item</button></li>
                </ul>
            </div>
        );
    });

    return (
        <div className='allcartproductparent'>
            {mapcartitems}
            <ul>
                <li>Total price=</li>
                <li>Discount =</li>
                <li>Pay amount=</li>
            </ul>
        </div>
    );
}




export default Cart;
