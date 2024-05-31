import dataBooks from "../../data/dataBooks";
import { useDispatch } from "react-redux";
import { removeBookFromCart } from "../../redux/cartSlice";

const CartBook = ({cartBook}) => {
    const books = dataBooks.find(book => book.id === cartBook.bookId);
    const dispatch = useDispatch();
     
    return(<div>
        <p> {books.name}</p>

        <p> Price: ${books.price * cartBook.quantity} </p>
        <span onClick={() => dispatch(removeBookFromCart({cartBookId: cartBook.id}))}>
       
        </span>
    </div>)
}

export default CartBook;