import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import "./App.css";
import Footer from './components/Footer'
import TranscationHistory from './pages/Home'
import History from './pages/History'

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/history" exact component ={History}/>
      </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
