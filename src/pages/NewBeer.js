import axios from 'axios';
import {useState} from 'react'

export default function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: null,
    tagline: null,
    first_brewed: null,
    attenuation_level: null,
    brewers_tips: null,
    contributed_by: null,
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(response => {
        console.log(response);
        setNewBeer({});
      })
      .catch(err => console.log(err))
  };

  return (
    <div className='new-beer-card'>
    <form onSubmit={handleSubmit}>
      <label>Name</label><br />
      <input 
        type='text'   
        onChange={e => setNewBeer({...newBeer, name: e.target.value})}/>
      <br />

      <label>Tagline</label><br />
      <input 
        type='text'            
        onChange={e => setNewBeer({...newBeer, tagline: e.target.value})} />
      <br />

      <label>First Brewed</label><br />
      <input 
        type='text'           
        onChange={e => setNewBeer({...newBeer, first_brewed: e.target.value})}/>
      <br />

      <label>Description</label><br />
      <textarea
        type='text'            
        onChange={e => setNewBeer({...newBeer, description: e.target.value})} />
      <br />

      <label>Brewer's Tips</label><br />
      <input 
        type='text'           
        onChange={e => setNewBeer({...newBeer, brewers_tips: e.target.value})} />
      <br />

      <label>Attenuation Level</label><br />
      <input 
        type='number'           
        onChange={e => setNewBeer({...newBeer, attenuation_level: e.target.value})}/>
      <br />

      <label>Contributed By</label><br />
      <input 
        type='text'            
        onChange={e => setNewBeer({...newBeer, contributed_by: e.target.value})} />
      <br />

      <button>Create a new beer</button>
    </form>
    </div>
  )
}
