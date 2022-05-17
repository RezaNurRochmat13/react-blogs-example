// Functional component

import Content from "./components/Content";
import Header from "./components/Header";

// Class component
function App() {
  const message = "Bayu jawara Gartic gan!";

    return ( 
      <div>
        <Header address="California" />
        <h1>Halo PEMUDA REMAS, {message} , {2 + 2}</h1>
        <p>Latif pro player ayo dance</p>
        <Content name="Nisa" age="21" />
      </div>
    );
}

export default App;