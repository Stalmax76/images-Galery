import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);
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
