import { useSelector } from "react-redux";
import { getCartBooks, getTotalPrice } from "../../redux/cartSlice";
import CartBook from './CartBook';

const Cart = () => {
    const cartBooks = useSelector(getCartBooks);
    const totalPrice = useSelector(getTotalPrice);

    return(<div className="cart">
         
       <img className='cartIcon' src="https://img.icons8.com/ios-glyphs/30/add-shopping-cart.png" alt="add-shopping-cart"/>
       <h4> TOTAL: $ {totalPrice} </h4>
        {cartBooks.map(cartBook => <CartBook cartBook={cartBook}/> 
    )}


    </div>)
}

export default Cart;