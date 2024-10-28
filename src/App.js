
import './App.css';
import SearchPage from './pages/SearchPage';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
