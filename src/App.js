import './App.css';
import { Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import OneBeer from './pages/OneBeer';

function App() {
  const [beerList, setBeerList] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then(response => {
              setBeerList(response.data);
          })
          .catch(err => console.log(err))
  }, []);

  /* const filteredBeers = beerList.slice().filter(beer => {
    if(beer.name.toLowerCase().includes(search.toLowerCase())) return true;
  }) */

  return (
    <div className="App">
    <NavBar />
    {/* <input type='text' value={search} onChange={e => setSearch(e.target.value)}/> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/beers' element={<Beers beerList={beerList} />} />
      <Route path='/beers/:beerId' element={<OneBeer beerList={beerList}/>} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/new-beer' element={<NewBeer />} />
    </Routes>
    </div>
  );
}

export default App;
