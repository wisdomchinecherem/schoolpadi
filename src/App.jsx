import './App.css';
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import SuperAdminLayout from './layouts/superadmin/SuperAdminLayout';
import UserManagement from './pages/superadmin/UserManagement';
import UserManagementDetail from './pages/superadmin/UserManagementDetail';
import Dashboard from './pages/superadmin/Dashboard';
// import Finance from './pages/finance';
// import FinanceLayout from './layouts/superadmin/FinanceLayout/FinanceLayout';
// import FinanceDashboard from './pages/superadmin/finance/Dashboard';
import Report from './pages/superadmin/Report';
// import InformationSystem from './pages/superadmin/finance/InformationSystem';
import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';
import AdminDashboard from './components/adminDashboard/AdminDashboard';  
import InfomationSystem from './components/informationpage/InfomationSystem'; 
import Teachers from './components/informationpage/Teachers';   
import AdminPage from './components/informationpage/AdminPage'; 
import Parents from './components/informationpage/Parents'; 
import Schedules from './components/schedulespage/Schedules';  
import Emails from './components/schedulespage/Emails'; 
import Events from './components/schedulespage/Events';
import SMS from './components/schedulespage/smspage/SMS';   
import SMSLogs from './components/schedulespage/smspage/SMSLogs';
import Credit from './components/schedulespage/smspage/Credit';
import Graduation from './components/adminDashboard/Graduation';


import Finance from './pages/superadmin/Finance';
import TeacherLayout from './layouts/teacher/TeacherLayout';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import InformationSystem from './pages/teacher/InformationSystem';
import StudentDetail from './pages/teacher/StudentDetail';
import AddStudent from './components/informationpage/AddStudent';
import AddTeacher from './components/informationpage/AddTeacher';
import AddAdmin from './components/informationpage/AddAdmin';

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* admin */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />  
        <Route path="/admindashboard/infomationsystem/addstudent" element={<Layout><AddStudent /></Layout>} />  
        <Route path="/admindashboard/infomationsystem/addteacher" element={<Layout><AddTeacher /></Layout>} />  
        <Route path="/admindashboard/infomationsystem/addadmin" element={<Layout><AddAdmin /></Layout>} />  

        <Route path="/admindashboard" element={<Layout><AdminDashboard/></Layout>} />
        <Route path="/infomationsystem" element={<Layout><InfomationSystem/></Layout>} /> 
        <Route path="/teachers" element={<Layout><Teachers/></Layout>} /> 
        <Route path="/parents" element={<Layout><Parents/></Layout>} /> 
        <Route path="/Schedules" element={<Layout><Schedules/></Layout>} />
        <Route path="/Emails" element={<Layout><Emails/></Layout>} />
        <Route path="/SMS" element={<Layout><SMS/></Layout>} />
        <Route path="/SMSLogs" element={<Layout><SMSLogs/></Layout>} />
        <Route path="/credit" element={<Layout><Credit/></Layout>} />
        <Route path="/Events" element={<Layout><Events/></Layout>} />
        <Route path="/Graduation" element={<Layout>< Graduation/></Layout>} />
        <Route path="/adminpage" element={<Layout><AdminPage/></Layout>} /> 

        
        {/* super admin */}
        <Route element={<SuperAdminLayout />}>
          <Route path="superadmin" element={<Dashboard />} />
          <Route path="superadmin/user-management" element={<UserManagement />} />
          <Route path="superadmin/user-management/:id" element={<UserManagementDetail />} />
          <Route path="superadmin/finance" element={<Finance />} />
          <Route path="superadmin/report" element={<Report />} />
        </Route>
        <Route element={<TeacherLayout />}>
          <Route path="teacher" element={<TeacherDashboard />} />
          <Route path="teacher/information-system" element={<InformationSystem />} />
          <Route path="teacher/information-system/student/:id" element={<StudentDetail />} />
          
        </Route>
      
      </Routes>
    </Router>
  );
};

export default App;
