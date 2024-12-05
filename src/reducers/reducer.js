const initialcartvalue={cartvalue:[]};

const Cartreducer = (state=initialcartvalue,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cartvalue:[...state.cartvalue,{...action.payload}]
            };

        case 'REMOVE_TO_CART':
            return{
                ...state,
                cartvalue:state.cartvalue.filter((item)=>item.id !==action.payload)
            }

        default:
            return state;

    };
};

export default Cartreducer;