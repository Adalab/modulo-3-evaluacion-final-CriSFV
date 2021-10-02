import '../styles/App.scss';
import '../styles/List.scss';
import { useEffect, useState } from 'react';
import initialData from '../services/api';
import Header from './Header';
import List from './List';

function App() {
  const [data, setData] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    initialData().then((response) => {
      setData(response);
    });
  }, []);

  console.log(data);

  const handleSearch = (value) => {
    console.log(value);
    setUserSearch(value);
  };

  const filteredList = data.filter((eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(userSearch.toLocaleLowerCase())
  );

  return (
    <div>
      <Header handleSearch={handleSearch} dataSearch={userSearch} />
      <main className='main'>
        <List data={filteredList} userSearch={userSearch} />
      </main>
    </div>
  );
}

export default App;
