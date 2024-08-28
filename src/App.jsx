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
import AdminDashboard from './components/admin/adminDashboard/AdminDashboard';  
import InfomationSystem from './components/admin/informationpage/InfomationSystem'; 
import Teachers from './components/admin/informationpage/Teachers';   
import AdminPage from './components/admin/informationpage/AdminPage'; 
import Parents from './components/admin/informationpage/Parents'; 
import Schedules from './components/admin/schedulespage/Schedules';
import Emails from './components/admin/schedulespage/Emails'; 
import Events from './components/admin/schedulespage/Events';
import SMS from './components/admin/schedulespage/smspage/SMS';   
import SMSLogs from './components/admin/schedulespage/smspage/SMSLogs';
import Credit from './components/admin/schedulespage/smspage/Credit';
import Graduation from './components/admin/graduation/Graduation';
import Administrations from './components/admin/administrationpage/Administrations';


import Finance from './pages/superadmin/Finance';
import TeacherLayout from './layouts/teacher/TeacherLayout';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import InformationSystem from './pages/teacher/InformationSystem';
import AiChat from './pages/teacher/chat/AiChat';
import StudentDetail from './pages/teacher/StudentDetail';
import MainChat from './components/teacher/mainChat/MainChat';
import AddStudent from './components/admin/informationpage/AddStudent';
import AddTeacher from './components/admin/informationpage/AddTeacher';
import AddAdmin from './components/admin/informationpage/AddAdmin';

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
        <Route path="/administrations" element={<Layout><Administrations/></Layout>} /> 

        
        {/* super admin */}
        <Route element={<SuperAdminLayout />}>
          <Route path="s" element={<Dashboard />} />
          <Route path="s/user-management" element={<UserManagement />} />
          <Route path="s/user-management/:id" element={<UserManagementDetail />} />
          <Route path="s/finance" element={<Finance />} />
          <Route path="s/report" element={<Report />} />
        </Route>
        <Route element={<TeacherLayout />}>
          <Route path="t" element={<TeacherDashboard />} />
          <Route path="t/information-system" element={<InformationSystem />} />
          <Route path="t/information-system/student/:id" element={<StudentDetail />} />
          <Route path="t/aichat" element={<AiChat />} />
          <Route path="t/chat" element={<MainChat />} />
          
        </Route>
      
      </Routes>
    </Router>
  );
};

export default App;
