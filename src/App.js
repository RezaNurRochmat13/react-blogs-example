// Functional component

// import Content from "./components/Content";
// import Header from "./components/Header";
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { gapi } from 'gapi-script';
import About from './components/About';
import Auth from './components/authentication/Auth';
import Car from './components/car/Car';
import Home from './components/Home';
import Todo from './components/todo/Todo';
import { Provider } from "react-redux";
import store from "./store";
import Chat from './components/chat';

// Class component
function App() {
  // const message = "Bayu jawara Gartic gan!";
  const clientId = "449632885333-phbbp1kth1aenlvbmdf8jnepp26efehf.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

    return ( 
      <div>
        {/* <Header address="California" /> */}
        {/* <h1>Halo PEMUDA REMAS, {message} , {2 + 2}</h1> */}
        <p>Latif pro player ayo dance</p>
        {/* <Content name="Nisa" age="21" /> */}
        {/* <Header /> */}
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={App} />
              <Route path='/login' element={<Auth />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/cars' element={<Car />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Router>
        </Provider>
        {/* <Footer /> */}
      </div>
    );
}

export default App;