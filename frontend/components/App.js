import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPeople = 'http://localhost:9009/api/people';
const urlPlanets = 'http://localhost:9009/api/planets';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  // Fetch people and planets data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:9009/api/people')
      .then(response => {
        setPeople(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:9009/api/planets')
      .then(response => {
        setPlanets(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {people.map(person => {
        const homeworld = planets.find(planet => planet.id === person.homeworld)?.name || 'Unknown';
        return (
          <Character key={person.id} person={person} homeworld={homeworld} />
        );
      })}
    </div>
  );
}


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
