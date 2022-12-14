import { useParams } from 'react-router-dom';

export default function OneBeer({beerList}) {
    const params = useParams();
    const id = params.beerId;

  return (
    <div>
    {beerList
        .filter(beer => beer._id === id)
        .map(beer => (
            <div className='beer-details' key={beer._id} >
            <img className='beer-details-picture' src={beer.image_url} alt=''/>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p style={{fontStyle: 'italic'}} >{beer.description}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Contributed by {beer.contributed_by}</p>
            </div>
        ))}
    </div>
  )
}
