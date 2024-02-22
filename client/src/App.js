import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isAuthorized } from "./utils/validators";
import { addUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const setUser = async () => {
      const authorized = await isAuthorized();
      const token = localStorage.getItem('auth');
      if (authorized && token) {
        console.log(`${process.env.REACT_APP_API_BASE_URL}/getUser`);
        console.log(token);
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/getUser`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: token })
      });
        const user = await response.json();
        if (user) dispatch(addUser(user));
      }
    }
    setUser()
  }, [dispatch])

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
