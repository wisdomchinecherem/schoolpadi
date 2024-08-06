// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import LandingPage from './pages/landingpage';
import SuperAdminLayout from './layouts/superadmin/SuperAdminLayout';
import Home from './pages/superadmin/UserManagement';
import SchoolDetail from './pages/superadmin/UserManagementDetail';
import UserManagement from './pages/superadmin/UserManagement';
import UserManagementDetail from './pages/superadmin/UserManagementDetail';
import Dashboard from './pages/superadmin/Dashboard';
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
          element={<Dashboard />}
          // loader={redirectIfUser}
        />
        <Route
          path="user-management"
          element={<UserManagement />}
          // loader={redirectIfUser}
        />
          <Route path="user-management/:id" element={<UserManagementDetail />} />
          </Route>
      </Routes>
    </Router>
  );
};

export default App;
