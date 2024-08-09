import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import SuperAdminLayout from './layouts/superadmin/SuperAdminLayout';
import UserManagement from './pages/superadmin/UserManagement';
import UserManagementDetail from './pages/superadmin/UserManagementDetail';
import Dashboard from './pages/superadmin/Dashboard';
import FinanceLayout from './layouts/superadmin/FinanceLayout/FinanceLayout';
import FinanceDashboard from './pages/superadmin/finance/Dashboard';
import Report from './pages/superadmin/Report';
import InformationSystem from './pages/superadmin/finance/InformationSystem';
import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';
import AdminDashboard from './components/adminDashboard/AdminDashboard';  
import InfomationSystem from './components/adminDashboard/InfomationSystem';
import Schedules from './components/adminDashboard/Schedules';    
import Graduation from './components/adminDashboard/Graduation';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return (
    <div>
      {/* Render Navbar on all pages */}
      {!hideHeaderFooter && <Navbar />}
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        {children}
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />  
        <Route path="/admindashboard" element={<Layout><AdminDashboard/></Layout>} />
        <Route path="/infomationsystem" element={<Layout><InfomationSystem/></Layout>} /> 
        <Route path="/Schedules" element={<Layout><Schedules/></Layout>} />
        <Route path="/Graduation" element={<Layout>< Graduation/></Layout>} />
        <Route element={<SuperAdminLayout />}>
          <Route path="superadmin" element={<Dashboard />} />
          <Route path="superadmin/user-management" element={<UserManagement />} />
          <Route path="superadmin/user-management/:id" element={<UserManagementDetail />} />
          <Route path="superadmin/report" element={<Report />} />
        </Route>
        <Route element={<FinanceLayout />}>
          <Route path="superadmin/finance/dashboard" element={<FinanceDashboard />} />
          <Route path="superadmin/finance/information-system" element={<InformationSystem />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
