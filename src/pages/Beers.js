import '../App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import axios from 'axios';

export default function Beers() {
  const[search, setSearch] = useState();
  const [beerList, setBeerList] = useState([]);
  

  useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then(response => {
              setBeerList(response.data);
          })
          .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q=' + search)
      .then(response=> {
        setBeerList(response.data)
      })
      .catch(err => console.log(err))
  }, [search])

  return (
    <>
    <Search setSearch={setSearch} />
    <div>
    {beerList.map(beer => (
      <div className='one-beer-card' key={beer._id}>
      <img className='beer-picture' src={beer.image_url} alt=''/>
        <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
        <h4>{beer.tagline}</h4>
        <p>{beer.description}</p>
      </div>
    ))}
    </div>
    </>
  )
}
