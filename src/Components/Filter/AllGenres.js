import Filter from "./Filter";

const AllGenres = () => {
    return (<div>
        <h1> Welcome to Book Store! </h1>

        {['ALL','DRAMA', 'FANTASY', 'FICTION', 'HISTORICAL FICTION', 'MYSTERY', 'ROMANCE', 'ADVENTURE', 'HORROR']
        .map(genre => <Filter genre={genre}/>
    )}
    </div>)
}

export default AllGenres;