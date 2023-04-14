import { Route, Routes } from 'react-router-dom';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
