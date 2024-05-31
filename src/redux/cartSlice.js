import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartBooks: []
    },
    reducers: {
        addBookToCart: (state, action) => {
            state.cartBooks.push({
                bookId: action.payload.book.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.book.price
            })
        },
        removeBookFromCart: (state, action) => {
            state.cartBooks = state.cartBooks.filter(
                cartBook => cartBook.id !== action.payload.cartBookId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartBooks.reduce((total, cartBooks) => {
        return cartBooks.totalPrice + total
    }, 0)
}

export const getCartBooks = state => state.cart.cartBooks;
export const { addBookToCart, removeBookFromCart } = slice.actions;
export default slice.reducer;