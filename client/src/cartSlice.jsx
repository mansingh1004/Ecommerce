import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';

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
        //  dataDecrease:(state, actions)=>{
        //      for (var i=0; i<state.cart.length; i++)
        //      {
        //         if (state.cart[i].id==actions.payload.id)
        //         {
        //             if(state.cart[i].qnty<=1)
        //             {
        //                 alert("Quantity not less than one")                      
        //             }else
        //             {
        //                  state.cart[i].qnty--;
        //             }                 
        //         }
        //      }
        // },






        dataDecrease: (state, action) => {
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i].id === action.payload.id) {
      if (state.cart[i].qnty <= 1) {
        // Just return some info
        state.cart[i].toastMessage = "Quantity cannot be less than one";
      } else {
        state.cart[i].qnty--;
        state.cart[i].toastMessage = null;
      }
    }
  }
},

        itemRemove:(state,actions)=>{
            state.cart=state.cart.filter(item=>item.id!=actions.payload.id)
        }
    }
    
})

export const {addtoCart, dataIncrease, dataDecrease,itemRemove} = cartSlice.actions;
export default cartSlice.reducer;

  <ToastContainer />