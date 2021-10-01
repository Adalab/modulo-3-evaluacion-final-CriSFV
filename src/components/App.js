import '../styles/App.scss';
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

  return (
    <div className='page'>
      {/* header */}
      <Header />
    </div>
  );
}

export default App;
