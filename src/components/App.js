import '../styles/App.scss';
import '../styles/List.scss';
import { useEffect, useState } from 'react';
import initialData from '../services/api';
import Header from './Header';
import List from './List';

function App() {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState('');

  useEffect(() => {
    initialData().then((response) => {
      setData(response);
    });
  }, []);

  console.log(data);

  const handleSearch = (value) => {
    console.log(value);
    setDataSearch(value);
  };

  return (
    <div>
      <Header handleSearch={handleSearch} dataSearch={dataSearch} />
      <main>
        <List data={data} />
      </main>
    </div>
  );
}

export default App;
