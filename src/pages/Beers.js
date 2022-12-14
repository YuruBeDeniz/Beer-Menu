import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Beers() {
    const [beerList, setBeerList] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                setBeerList(response.data);
            })
            .catch(err => console.log(err))
    }, [])

  return (
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
  )
}
