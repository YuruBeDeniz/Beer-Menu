import '../App.css';
import { Link } from 'react-router-dom';

export default function Beers({beerList}) {
    
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
