import { createSlice } from '@reduxjs/toolkit'
const cartSlice= createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state, actions)=>{
            const data= state.cart.filter(key=>key.id==actions.payload.id);
             if (data.length>=1)
             {
                alert("Product aleready added!");
             }
             else 
             {
                state.cart.push(actions.payload)
             }
           
        },

        dataIncrease:(state, actions)=>{
             for (var i=0; i<state.cart.length; i++)
             {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
             }
        },
         dataDecrease:(state, actions)=>{
             for (var i=0; i<state.cart.length; i++)
             {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty--;
                }
             }
        }
    }
})

export const {addtoCart, dataIncrease, dataDecrease} = cartSlice.actions;
export default cartSlice.reducer;