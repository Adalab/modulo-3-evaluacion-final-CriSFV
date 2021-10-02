import '../styles/App.scss';
import '../styles/List.scss';
import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import initialData from '../services/api';
import Header from './Header';
import List from './List';
import CardDetail from './CardDetail';

function App() {
  const [data, setData] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [userClickCharacter, setUserClickCharacter] = useState([]);

  useEffect(() => {
    initialData().then((response) => {
      setData(response);
    });
  }, []);

  const handleSearch = (value) => {
    setUserSearch(value);
  };
  // quiero que me encuentres el que tenga el mismo id que el que ha seleccionado la usuaria
  const userClick = (id) => {
    const characterClicked = data.find((each) => id === each.id);
    // console.log(characterClicked);
    setUserClickCharacter(characterClicked);
  };

  const routeData = useRouteMatch('/character/:id');
  console.log(routeData);

  const filteredList = data.filter((eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(userSearch.toLocaleLowerCase())
  );

  return (
    <div>
      <Header handleSearch={handleSearch} dataSearch={userSearch} />
      <main className='main'>
        {/* <Switch>
          <Route path='/character/:id'> */}
        <CardDetail data={userClickCharacter} />
        {/* </Route>
          <Route path='/' exact> */}
        <List
          data={filteredList}
          userSearch={userSearch}
          userClick={userClick}
        />
        {/* </Route> */}
        {/* <Route>
            <section>Oh! La página que estás buscando no existe</section>
          </Route>
        </Switch> */}
      </main>
    </div>
  );
}

export default App;
