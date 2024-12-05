import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart } from './actions/action';

const Searchproduct = ({ searchitem }) => {

  const add_dispatch =useDispatch();
      
  const allproductitems = [
    {   id:'c1',
        Image: 'cake_items/aclassicgerman.webp',
        itemname: 'Aclassicgerman',
        itemprice: '₹ 745.00 (per kg)'
    },
    {   id:'c2',
        Image: 'cake_items/AfterNine.webp',
        itemname: 'Aftrenine chocolate',
        itemprice: '₹ 800.00 (per kg)'
    },
    {   id:'c3',
        Image: 'cake_items/black-forest.webp',
        itemname: 'Blackforest',
        itemprice: '₹ 900.00 (per kg)'
    },
    {   id:'c4',
        Image: 'cake_items/captain-america-.webp',
        itemname: 'Captain-america',
        itemprice: '₹ 1000.00 (per kg)'
    },
    {   id:'c5',
        Image: 'cake_items/choco-truffle.webp',
        itemname: 'Choco-truffle',
        itemprice: '₹ 800.00 (per kg)'
    },
    {   id:'c6',
        Image: 'cake_items/custom-diwali.webp',
        itemname: 'Freshcream cake',
        itemprice: '₹ 850.00 (per kg)'
    },
    {   id:'c7',
        Image: 'cake_items/DarkChocolateMousseCake.webp',
        itemname: 'DarkchocolateMoussecake',
        itemprice: '₹ 1000.00 (per kg)'
    },
    {   id:'c8',
        Image: 'cake_items/Dense_Loaf_Truffle.webp',
        itemname: 'Dense-loaf-truffle',
        itemprice: '₹ 1200.00 (per kg)'
    },
    {   id:'c9',
        Image: 'cake_items/FreshCreamPineapple.webp',
        itemname: 'Freshcream-pineapple',
        itemprice: '₹ 900.00 (per kg)'
    },
    {   id:'c10',
        Image: 'cake_items/Freshfruitandcreamcake.webp',
        itemname: 'Freshfruitand-creamcake',
        itemprice: '₹ 850.00 (per kg)'
    },
    {   id:'c11',
        Image: 'cake_items/Lemon Lovers Pound Cake.jfif',
        itemname: 'Lemon Lovers pound-cake',
        itemprice: '₹ 750.00 (per kg)'
    },
    {   id:'c12',
        Image: 'cake_items/photo-pulling-blueberry.webp',
        itemname: 'Photo-pulling-blueberry',
        itemprice: '₹ 1250.00 (per kg)'
    },
    {   id:'c13',
        Image: 'cake_items/sq-chocolate-diwali.webp',
        itemname: 'sq-chocolate-cake',
        itemprice: '₹ 800.00 (per kg)'
    },
    {   id:'c14',
        Image: 'cake_items/sq-mickey_mouse.webp',
        itemname: 'sq-mickey-mouse',
        itemprice: '₹ 850.00 (per kg)'
    },
    {   id:'c15',
        Image: 'cake_items/sq-one-number.webp',
        itemname: 'sq-one-number',
        itemprice: '₹ 900.00 (per kg)'
    },
    {   id:'c16',
        Image: 'cake_items/squ-angelic-beauty-photo.webp',
        itemname: 'squ-angelic-beauty-photo',
        itemprice: '₹ 1000.00 (per kg)'
    },
    {   id:'c17',
        Image: 'cake_items/squ-chennai-super-kings.webp',
        itemname: 'Chennai-superkings',
        itemprice: '₹ 800.00 (per kg)'
    },
    {   id:'c18',
        Image: 'cake_items/traditionalwedding_cake.webp',
        itemname: 'Wedding-cake',
        itemprice: '₹ 900.00 (per kg)'
    },
    {   id:'m1',
        Image: 'mixture_items/KARA_BOONDI.jfif',
        itemname: 'Kara_boondi',
        itemprice: '₹ 350.00 (per kg)'
    },
    {    id:'m2',
        Image: 'mixture_items/bombay_mixture.jfif',
        itemname: 'Bombay_mixture',
        itemprice: '₹ 400.00 (per kg)'
    },
    {    id:'m3',
        Image: 'mixture_items/Boondi_Recipe.jfif',
        itemname: 'BOONDI',
        itemprice: '₹ 300.00 (per kg)'
    },
    {    id:'m4',
        Image: 'mixture_items/Chakli_Recipe.jfif',
        itemname: 'Chakli_Recipe',
        itemprice: '₹ 350.00 (per kg)'
    },
    {    id:'m5',
        Image: 'mixture_items/Corn_Flakes.jfif',
        itemname: 'Corn_flakes',
        itemprice: '₹ 400.00 (per kg)'
    },
    {    id:'m6',
        Image: 'mixture_items/Cornflakes.jfif',
        itemname: 'Cornflakes',
        itemprice: '₹ 350.00 (per kg)'
    },
    {    id:'m7',
        Image: 'mixture_items/Homemade Bombay _Mixture.jfif',
        itemname: 'Homade-bombay-mixture',
        itemprice: '₹ 400.00 (per kg)'
    },
    {    id:'m8',
        Image: 'mixture_items/Indian_Snacks recipe-Thattai.jfif',
        itemname: 'Thattai',
        itemprice: '₹ 300.00 (per kg)'
    },
    {    id:'m9',
        Image: 'mixture_items/Jhalmuri.jfif',
        itemname: 'Jalmuri',
        itemprice: '₹ 350.00 (per kg)'
    },
    {    id:'m10',
        Image: 'mixture_items/kara_muruku.jfif',
        itemname: 'Karamuruku',
        itemprice: '₹ 380.00 (per kg)'
    },
    {    id:'m11',
        Image: 'mixture_items/Kerala_Mixture.jfif',
        itemname: 'Kerala_mixture',
        itemprice: '₹ 400.00 (per kg)'
    },
    {    id:'m12',
        Image: 'mixture_items/Manoharam_Murukku.jfif',
        itemname: 'manoharam_muruku',
        itemprice: '₹ 380.00 (per kg)'
    },
    {    id:'m13',
        Image: 'mixture_items/Mixture_Recipe.jfif',
        itemname: 'Mixture',
        itemprice: '₹ 300.00 (per kg)'
    },
    {    id:'m14',
        Image: 'mixture_items/ROASTED POHA CHIVDA _ CHEVDA.jfif',
        itemname: 'Chevda',
        itemprice: '₹ 350.00 (per kg)'
    },
    {    id:'m15',
        Image: 'mixture_items/Sev_Recipe.jfif',
        itemname: 'Sev',
        itemprice: '₹ 300.00 (per kg)'
    },
    {    id:'m16',
        Image: 'mixture_items/Shahi_Namkeen.jfif',
        itemname: 'Namkeen',
        itemprice: '₹ 340.00 (per kg)'
    },
    {    id:'m17',
        Image: 'mixture_items/South_Indian_Mixture.jfif',
        itemname: 'Special_mixture',
        itemprice: '₹ 400.00 (per kg)'
    },
    {    id:'m18',
        Image: 'mixture_items/Spicy _Mixture.jfif',
        itemname: 'Spicy_mixture',
        itemprice: '₹ 350.00 (per kg)'
    },
    {    id:'s1',
        Image: 'sweet_items/Gulab_Jamun.jfif',
        itemname: 'Gulab_jamun',
        itemprice: '₹ 200.00 (10 piec)'
    },
    {   id:'s2',
        Image: 'sweet_items/Balushahi_Recipe.jfif',
        itemname: 'Balushahi',
        itemprice: '₹ 450.00 (per kg)'
    },
    {   id:'s3',
        Image: 'sweet_items/Coconut _Ladoo.jfif',
        itemname: 'Coconut_ladoo',
        itemprice: '₹ 500.00 (per kg)'
    },
    {   id:'s4',
        Image: 'sweet_items/Gujiya_Recipe.jfif',
        itemname: 'Gujiya',
        itemprice: '₹ 500.00 (per kg)'
    },
    {   id:'s5',
        Image: 'sweet_items/Jalebi.jfif',
        itemname: 'Jalebi',
        itemprice: '₹ 450.00 (per kg)'
    },
    {   id:'s6',
        Image: 'sweet_items/Karachi_Halwa.jfif',
        itemname: 'Karachi_halwa',
        itemprice: '₹ 700.00 (per kg)'
    },
    {   id:'s7',
        Image: 'sweet_items/Kesar_Penda.jfif',
        itemname: 'Kesar_penda',
        itemprice: '₹ 550.00 (per kg)'
    },
    {   id:'s8',
        Image: 'sweet_items/laddu.jpg',
        itemname: 'Ladoo',
        itemprice: '₹ 400.00 (per kg)'
    },
    {   id:'s9',
        Image: 'sweet_items/Mohanthal.jfif',
        itemname: 'Mohanthal',
        itemprice: '₹ 450.00 (per kg)'
    },
    {   id:'s10',
        Image: 'sweet_items/mysore-pak.jpeg',
        itemname: 'Mysore-pak',
        itemprice: '₹ 380.00 (per kg)'
    },
    {   id:'s11',
        Image: 'sweet_items/neimysore-pak.jpg',
        itemname: 'Neimysore_pak',
        itemprice: '₹ 600.00 (per kg)'
    },
    {   id:'s12',
        Image: 'sweet_items/paalkova.webp',
        itemname: 'Paalkova',
        itemprice: '₹ 1000.00 (per kg)'
    },
    {   id:'s13',
        Image: 'sweet_items/padusha.jpg',
        itemname: 'Padusha',
        itemprice: '₹ 320.00 (per kg)'
    },
    {    id:'s14',
        Image: 'sweet_items/Peanut_Kozhukattai.jfif',
        itemname: 'Peanut_kozhukattai',
        itemprice: '₹ 150.00 (6 piec)'
    },
    {   id:'s15',
        Image: 'sweet_items/rasagulla.jfif',
        itemname: 'Rasagulla',
        itemprice: '₹ 180.00 (6 piec)'
    },
    {   id:'s16',
        Image: 'sweet_items/Sago_Kesari.jfif',
        itemname: 'Sago_kesari',
        itemprice: '₹ 50.00 (100g)'
    },
    {   id:'s17',
        Image: 'sweet_items/soan-papdi.webp',
        itemname: 'Soan_papdi',
        itemprice: '₹ 150.00 (1 pack)'
    },
    {   id:'s18',
        Image: 'sweet_items/mixed_sweets.jfif',
        itemname: 'Mixed_sweets',
        itemprice: '₹ 500.00 (per kg)'
    }];

  const searchfilterdata = useMemo(() => {
    return (
      searchitem !== '' ? allproductitems.filter((items) => {
        return items.itemname && items.itemname.toLowerCase().includes(searchitem.toLowerCase());

      }) : []
    );
  }, [searchitem])

  useEffect(() => {
    if (searchitem !== '' && searchfilterdata.length === 0) {
      alert("Your search item is not here");
    }
  }, [searchitem, searchfilterdata]);


  const mapedsearchvalue = searchfilterdata && searchfilterdata.length > 0 && searchfilterdata.map((items, index) => {
    return (
      <div key={index} className='searchparent'>
        <img className='allsearchproducts' src={require(`./assets/${items.Image}`)} alt={`${items.itemname}`} />
        <p className='productdetails'>{items.itemname}</p>
        <p className='productdetails'>{items.itemprice}</p>
        <button onClick={()=>{add_dispatch(add_to_cart(items))}} type='button'> Add to cart</button>
      </div>
    )
  });

  return (
    <div className='allsearchparent flexiblealign'>
      {mapedsearchvalue}
    </div>
  );
}


export default Searchproduct;
