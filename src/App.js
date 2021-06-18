import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      {/* <Sidebar/> */}
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
