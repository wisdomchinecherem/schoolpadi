import { Routes, Route } from 'react-router-dom';
import Landingpage from '../pages/landingpage';
<<<<<<< HEAD
=======
// import Navbar from '../components/Landingpage/Navbar';
import Footer from '../components/molecule/Footer';
>>>>>>> c6f727481760a274529bb6b92c9ba6c63209423e
import AdminDashboard from '../components/adminDashboard/AdminDashboard';
 import SuperAdminLayout from '../layouts/superadmin/SuperAdminLayout';
 import Home from '../pages/superadmin/Home';
import Footer from '../components/Landingpage/Footer';

function PageRoutes() {
     return (
       <div>
         {/*<Navbar />  Ensure Navbar is always visible */}
         <Routes>
           <Route path="/" element={<Landingpage />} />
           {/*<Route path="/navbar" element={<Navbar />} />*/}
        <Route path="/footer" element={<Footer />} />
        <Route path="/admindashboard'" element={<AdminDashboard />} />
       
           </Routes>
      <Footer /> {/* Ensure Footer is always visible */}
    </div>
  );
}

export default PageRoutes;
