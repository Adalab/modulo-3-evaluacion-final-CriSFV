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
  console.log(data);
  const paintList = data.map((eachdata, i) => {
    return (
      <li className='list__character' key={i}>
        <img
          className='list__character__img'
          src={eachdata.photo}
          alt={eachdata.name}
        />
        <h4 className='list__character__name'>{eachdata.name}</h4>
        <p className='list__character__rest'>{eachdata.species}</p>
      </li>
    );
  });

  return (
    <div className='page'>
      <Header />
      <main>
        <ul className='list'>{paintList}</ul>
      </main>
    </div>
  );
}

export default App;
