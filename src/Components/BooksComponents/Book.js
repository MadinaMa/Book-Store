import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../redux/cartSlice";

const Book = ({book}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (<div className="books">
        
        <img src={`${book.img}.jpg`} alt="book"/>
        <span>
        <h4> {book.name} </h4>
        <h5> {book.author}</h5>
        <h4> $ {book.price} </h4>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="addBook" onClick={() => {dispatch(addBookToCart({book, quantity}));
        }}> Add to cart </button>
        </span>
       
            </div>)
}

export default Book;