import { Routes, Route } from 'react-router-dom';
import Landingpage from '../pages/landingpage';
// import Navbar from '../components/Landingpage/Navbar';
import Footer from '../components/Landingpage/Footer';
import AdminDashboard from '../components/adminDashboard/AdminDashboard';

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
