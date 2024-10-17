import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[],
    productsNumber: 0,
};



export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart : (state , action) => {
            // check if product exist in cart

            const addProductExists =state.products.find((product) => product.id === action.payload.id);
                    if(addProductExists){
                        addProductExists.quantity += parseInt(action.payload.quantity)
                    }
                    else{
                        state.products.push({
                            id: action.payload.id,
                    title: action.payload.title, // Include title
                    price: action.payload.price, // Include price
                    quantity: action.payload.quantity,
                    image_small: action.payload.image_small,
                    brand: action.payload.brand,
                    attribute: action.payload.attribute,
                    badge : action.payload.badge,

                });
                    }
                    state.productsNumber = state.productsNumber + parseInt(action.payload.quantity)
        },
        removeFromCart: (state, action) => {
            const ProductToRemove = state.products.find((product) => product.id === action.payload);
            state.productsNumber = state.productsNumber - ProductToRemove.quantity;
            const index = state.products.findIndex((product) => product.id === action.payload)
            state.products.splice(index, 1);

        },
    }


});


export const {addToCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;