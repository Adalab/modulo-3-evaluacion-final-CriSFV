import '../styles/App.scss';
import '../styles/List.scss';
import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import initialData from '../services/api';
import Header from './Header';
import List from './List';
import CardDetail from './CardDetail';
import DoesNotExist from './DoesNotExist';

function App() {
  const [data, setData] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    initialData().then((response) => {
      setData(response);
    });
  }, []);

  const handleSearch = (value) => {
    setUserSearch(value);
  };

  const routeData = useRouteMatch('/card/:id');
  const cardId = routeData !== null ? parseInt(routeData.params.id) : ''; //me da el id clickado

  const selectCard = data.find((card) => card.id === cardId);

  const filteredList = data.filter((eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(userSearch.toLocaleLowerCase())
  ); // si no existe XXX... devuelve No exist.
  console.log(filteredList); //si no coincide me devuelve vacio

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path='/card/:id'>
            <CardDetail data={selectCard} />
          </Route>
          <Route path='/' exact>
            <List
              handleSearch={handleSearch}
              dataSearch={userSearch}
              data={filteredList}
              userSearch={userSearch}
            />
          </Route>
          <Route>
            <DoesNotExist />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
