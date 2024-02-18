import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData'


const initialState={
    cart:[],
    item:productData,
    totalQuantity:0,
    totalPrice:0,
}


export const cartSlice=createSlice({

    name:'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            state.cart.push(action.payload)
        },
        getCartTotal:(state)=>{
        let {totalQuantity,totalPrice}=state.cart.reduce(
            (cartTotal,cartItem)=>{
                const{price,quantity}=cartItem;
                console.log(price,quantity);
                const itemTotal=price*quantity;
                cartTotal.totalPrice +=itemTotal;
                cartTotal.totalQuantity+=quantity;
                return cartTotal;
            },
            {
                totalPrice:0,
                totalQuantity:0
            }
            );
            state.totalPrice=totalPrice;
            state.totalQuantity=totalQuantity;
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !==action.payload)
        },
        increaseQty:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                    if(item.id===action.payload){
                        return{...item,quantity:item.quantity+1};

                    }
                    return item;
                });
        },
        decreaseQty:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                    if(item.id===action.payload){
                        return{...item,quantity:item.quantity-1};

                    }
                    return item;
                });
        }
    },

}

);

export const {addTocart,getCartTotal,removeItem,increaseQty,decreaseQty}=cartSlice.actions;

export default cartSlice.reducer