import React from "react";

export const add_to_cart= (item)=>{
    return{
        type:'ADD_TO_CART',
        payload:item
    };
};

export const remove_to_cart = (id)=>{
    return{
        type:'REMOVE_TO_CART',
        payload:id
    }
}