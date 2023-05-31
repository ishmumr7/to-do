import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Router>
    </div>
  );
}

export default App;
