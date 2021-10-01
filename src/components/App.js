import '../styles/App.scss';
import '../styles/List.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  const paintList = () => {
    return data.map((eachData, index) => {
      return (
        <li className='list__character' key={index}>
          <img
            className='list__character__img'
            src={eachData.photo}
            alt={eachData.name}
          />
          <h4 className='list__character__name'>{eachData.name}</h4>
          <p className='list__character__rest'>{eachData.species}</p>
        </li>
      );
    });
  };

  return (
    <div className='page'>
      <Header />
      <main>
        <ul className='list'>{paintList()}</ul>
      </main>
    </div>
  );
}

export default App;
