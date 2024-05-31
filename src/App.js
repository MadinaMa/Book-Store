import './App.css';
import Books from './Components/BooksComponents/Books';
import AllGenres from './Components/Filter/AllGenres';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <AllGenres/>
        <Cart/>
      </div>
      <div className='block'>
        <Books/>
      </div>

    </div>
  );
}

export default App;
