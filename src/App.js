import './App.css';
import StateList from './components/StateList/StateList'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Districts from './components/Districts/Districts'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<StateList />}/>
          <Route exact path='/state' element={<Districts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
