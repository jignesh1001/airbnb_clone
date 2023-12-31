import { Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import Accountpage from "./pages/AccountPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/account/:subpage?" element={<Accountpage/>} />
        <Route path="/account/:subpage/:action" element={<Accountpage/>} />

      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
