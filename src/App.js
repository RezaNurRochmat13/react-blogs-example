// Functional component

// import Content from "./components/Content";
// import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About';
import Auth from './components/authentication/Auth';
import Car from './components/car/Car';
import Home from './components/Home';

// Class component
function App() {
  // const message = "Bayu jawara Gartic gan!";

    return ( 
      <div>
        {/* <Header address="California" /> */}
        {/* <h1>Halo PEMUDA REMAS, {message} , {2 + 2}</h1> */}
        <p>Latif pro player ayo dance</p>
        {/* <Content name="Nisa" age="21" /> */}
        {/* <Header /> */}
        <Router>
          <Routes>
            <Route path="/" element={App} />
            <Route path='/login' element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/cars' element={<Car />} />
          </Routes>
        </Router>
        {/* <Footer /> */}
      </div>
    );
}

export default App;