import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import userApi from "./features/api/userApi";
import useFetch from "./features/hooks/useFetch";

function App() {
  const dispatch = useDispatch();
  const { data: userData, loading, error } = useFetch(userApi.getUser());

  useEffect(() => {
    if (userData) dispatch(addUser(userData));
    if (error) toast.error(error);
  }, [userData, dispatch, error]);

  return (
    <div className="app">
      <ScrollRestoration />
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "var(--font-family-semibold)",
          },
        }}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
