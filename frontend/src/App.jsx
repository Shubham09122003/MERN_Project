import "react-toastify/dist/ReactToastify.css";
import Contacts from "./pages/Contacts/Contacts";
import ContactForm from "./components/ContactForm/ContactForm";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          Component={() => {
            const token = localStorage.getItem("token");
            return token ? <Contacts /> : Navigate({ to: "/register" });
          }}
        />
        <Route
          path="/add-contact"
          Component={() => {
            const token = localStorage.getItem("token");
            return token ? <ContactForm /> : Navigate({ to: "/login" });
          }}
        />
        <Route
          path="/update-contact/:contact_id"
          Component={() => {
            const token = localStorage.getItem("token");
            return token ? <ContactForm /> : Navigate({ to: "/login" });
          }}
        />
        <Route path="/register" Component={() => {
            const token = localStorage.getItem("token");
            return token ? <Contacts /> : <Register/>;}} />
        <Route path="/login" Component={() => {
            const token = localStorage.getItem("token");
            return token ? <Contacts /> : <Login/>;}} />
        <Route
          path="*"
          Component={() => {
            Navigate({ to: "/login" });
          }}
        />
      </Routes>
    </>
  );
}

export default App;
