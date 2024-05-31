import { useDispatch, useSelector } from "react-redux";
import { getSelectedGenre, filterGenre } from "../../redux/booksSlice";

const Filter = ({genre}) => {
    const dispatch = useDispatch();
    const selectedGenre = useSelector(getSelectedGenre);
    return (<div>
        <p onClick={() => {dispatch(filterGenre(genre))}} className={selectedGenre === genre ? 'genreButtonSelected genreButton' : 'genreButton'}> 
        {genre} </p>
    </div>
    )
}

export default Filter;