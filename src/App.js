import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Changed from Switch to Routes
  Route,
} from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Updated syntax */}
          <Route path="/users" element={<UserList />} /> {/* Updated syntax */}
          <Route path="/users/:userId" element={<User />} /> {/* Updated syntax */}
          <Route path="/newUser" element={<NewUser />} /> {/* Updated syntax */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
