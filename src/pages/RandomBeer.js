import {useEffect, useState} from 'react';
import axios from 'axios';

export default function RandomBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            let randomIndex = Math.floor(Math.random() * response.data.length);
            setBeers(response.data[randomIndex]);
        })
        .catch(err => console.log(err))
}, []);

  return (
    <div>
      <img src={beers?.image_url} height='150px' alt=''/>
      <h3>{beers.name}</h3>
      <h4>{beers.tagline}</h4>
      <p style={{fontStyle: 'italic'}} >{beers.description}</p>
      <p>First brewed: {beers.first_brewed}</p>
      <p>Attenuation level: {beers.attenuation_level}</p>
      <p>Contributed by {beers.contributed_by}</p>
    </div>
  )
}
