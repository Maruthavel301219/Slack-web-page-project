import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { add_to_cart } from '../../actions/action';


const Sweet = (props) => {
    

    const add_dispatch = useDispatch();
    const selectcartvalue = useSelector((state)=>state.cartvalue);

    const sweetmapfun = props.sweetdata && props.sweetdata.length > 0 && props.sweetdata.map((items, index) => {

        const iscartitem = selectcartvalue && selectcartvalue.some((item)=>item.itemname === items.itemname);

         
        return (
            <div className='sweetparents' key={index}>
                <img className='allsweetproducts' src={require(`../../assets/${items.Image}`)} alt={`${items.itemname}`} /><br />
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
        <div className='allsweetproductsparent flexiblealign' >
            {sweetmapfun}
        </div>
    );
}


export default Sweet;

