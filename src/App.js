import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import OneBeer from './pages/OneBeer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/beers' element={<Beers />} />
      <Route path='/beers/:beerId' element={<OneBeer />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/new-beer' element={<NewBeer />} />
    </Routes>
    </div>
  );
}

export default App;
