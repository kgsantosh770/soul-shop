import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';

function App() {
  return (
    <div className="app">
      <ScrollRestoration />
      <Toaster 
        toastOptions={{
          style: {
            fontFamily: 'var(--font-family-semibold)',
          }
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
