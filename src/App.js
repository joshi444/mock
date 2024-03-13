import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Programs from './components/Programs/Program';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program" element={<Programs />} />
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
