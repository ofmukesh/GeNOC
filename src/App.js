import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import CreateNOC from "./pages/noc/CreateNOC";
import NavBar from "./components/common/Navbar";
import Error404 from "./pages/error/404";
import DownloadNOC from "./pages/noc/DownloadNOC";
import { Footer } from "./components/common/Footer";
import AuthToken from "./components/common/AuthToken";

function PrivateRoute() {
  if (!AuthToken) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <>
        <NavBar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </>
    </>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-noc" element={<CreateNOC />} />
          <Route path="/download-noc" element={<DownloadNOC />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
