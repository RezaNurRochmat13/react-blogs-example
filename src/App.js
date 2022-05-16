// Functional component

import Header from "./components/Header";

// Class component
function App() {
  const message = "Bayu jawara Gartic gan!";

    return ( 
      <div>
        <Header />
        <h1>Halo PEMUDA REMAS, {message} , {2 + 2}</h1>
        <p>Latif pro player ayo dance</p>
      </div>
    );
}

export default App;