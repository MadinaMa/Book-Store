import dataBooks from "../../data/dataBooks";
import Book from "./Book";
import { useSelector } from "react-redux";
import { getSelectedGenre } from "../../redux/booksSlice";

const Books = () => {
    const selectedGenre = useSelector(getSelectedGenre);

    return ( <div>
     {dataBooks
     .filter(book => {
        if (selectedGenre === 'ALL') return true;
        return selectedGenre === book.genre;
     })
     .map(book => <Book book={book}/>)
     }
        </div>);
}

export default Books;