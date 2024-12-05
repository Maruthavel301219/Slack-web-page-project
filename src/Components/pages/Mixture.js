import React from 'react';
import { add_to_cart } from '../../actions/action';
import { useDispatch, useSelector } from 'react-redux';


const Mixture = (props) => {

    
    const add_dispatch = useDispatch();
    const selectcartvalue=useSelector((state)=>state.cartvalue);
    

    const mixturemapfun = props.mixturedata && props.mixturedata.length > 0 && props.mixturedata.map((items, index) => {
         
            const iscartitem = selectcartvalue && selectcartvalue.some((item)=>item.itemname === items.itemname);
        return (
            <div className='mixtureparents' key={index}>
                <img className='allmixtureproducts' src={require(`../../assets/${items.Image}`)}alt={`${items.itemname}`} /><br/>
                <p className='productdetails'>{items.itemname}</p>
                <p className='productdetails'>{items.itemprice}</p>
                <button
                    onClick={() => {
                        if (!iscartitem) {
                            add_dispatch(add_to_cart(items));
                        }
                        else { alert('This item is alredy in the cart!'); }
                    }}
                    disabled={iscartitem}
                    type='button'
                    id={iscartitem?'item_is_added':''}>
                    {iscartitem ? 'Item is added' : 'Add to cart'}
                </button>
            </div>
        );
    });

    return (
        <div className='allmixtureproductsparent flexiblealign' >
            {mixturemapfun}
        </div>
    );

}


export default Mixture;
