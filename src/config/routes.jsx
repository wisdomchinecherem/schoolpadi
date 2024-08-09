import { Routes, Route } from 'react-router-dom';
import Landingpage from '../pages/landingpage';
 import Navbar from '../components/Landingpage/Navbar';
import Footer from '../components/molecule/Footer';
import AdminDashboard from '../components/adminDashboard/AdminDashboard';
import InfomationSystem from '../components/adminDashboard/InfomationSystem';  
import Schedules from '../components/adminDashboard/Schedules'; 
import Graduation from '../components/adminDashboard/Graduation';
 import SuperAdminLayout from '../layouts/superadmin/SuperAdminLayout';
 import Home from '../pages/superadmin/Home';
import Footer from '../components/Landingpage/Footer';  

function PageRoutes() {
     return (
       <div>
        <Navbar />  Ensure Navbar is always visible 
         <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/admindashboard" element={<AdminDashboard />} /> 
        <Route path="/infomationsystem" element={<InfomationSystem />} />
        <Route path="/Schedules" element={<Schedules/>} />
        <Route path="/Graduation" element={<Graduation/>} />
           </Routes>
      <Footer /> {/* Ensure Footer is always visible */}
    </div>
  );
}

export default PageRoutes;
