import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;