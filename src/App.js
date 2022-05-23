import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="header">
      <Routes>
        <Route path="/details" element={<Details />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
