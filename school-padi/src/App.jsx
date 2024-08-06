// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import LandingPage from './pages/landingpage';
import SuperAdminLayout from './layouts/superadmin/SuperAdminLayout';
import Home from './pages/superadmin/Home';
// import Footer from './components/molecule/Footer';
// import AdminDashboard from './components/adminDashboard/AdminDashboard';


const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return (
    <div>
      {/* {!hideHeaderFooter && <Navbar />} */}
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        {children}
      </div>
      {/* {!hideHeaderFooter && <Footer />} */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Layout><LandingPage /></Layout>} /> */}
      {/* <Route path="/admindashboard" element={<Layout><AdminDashboard/></Layout>} /> */}
      <Route element={<SuperAdminLayout />}>
        <Route
          path="superadmin"
          element={<Home />}
          // loader={redirectIfUser}
        />
        {/* <Route path="logout" action={logoutUser} /> */}
      </Route>
      </Routes>
    </Router>
  );
};

export default App;
