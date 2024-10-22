import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { PageRoutes } from "./PageRoutes";

function App() {
  const rootData = JSON.parse(localStorage.getItem("persist:root"));
  const user =
    rootData && rootData.user ? JSON.parse(rootData.user).currentUser : null;
  const isAdmin = user ? user.isAdmin : false;

  return (
    <Router>
      <Routes>
        {isAdmin ? (
          <>
            <Route path="/*" element={<PageRoutes />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} /> 
        )}
      </Routes>
    </Router>
  );
}

export default App;
