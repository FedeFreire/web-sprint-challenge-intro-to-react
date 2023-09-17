import React, {useState} from 'react'

function Character({ person, homeworld }) {
  const [showHomeworld, setShowHomeworld] = useState(false);
  const toggleShowHomeworld = () => setShowHomeworld(!showHomeworld);

  return (
    <div className="character-card" onClick={toggleShowHomeworld}>
      <h3 className="character-name">{person.name}</h3>
      {showHomeworld && (
        <p>Planet: <span className="character-planet">{homeworld}</span></p>
      )}
    </div>
  );
}


export default Character
