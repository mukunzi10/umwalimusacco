import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Dashboard from "./components/pages/Dashboard";
import Transactions from "./components/pages/Transactions";
import Loans from "./components/pages/Loans";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login as the default page */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Password reset */}
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
