import { useEffect } from 'react';

const API = 'http://localhost:3000/api/v1/chess';

function Updater(props) {
  useEffect(() => {
    const moveString = JSON.stringify(props.moves);
    console.log(moveString);
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: moveString
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error);
  }, [props.moves]);
  return null;
}

export default Updater;
