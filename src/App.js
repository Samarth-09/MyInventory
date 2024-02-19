import './App.css';
import AddStock from './Components/AddStock/AddStock';
import Inventory from './Components/Inventory';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inventory/>}/>
          <Route path="/addStock" element={<AddStock/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
