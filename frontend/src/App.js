import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [search, setSearch] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    fetch(`https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header title='Images Gallary' />
      <Search search={search} setSearch={setSearch} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

App.propTypes = {};

export default App;
