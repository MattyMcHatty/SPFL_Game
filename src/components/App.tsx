import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;