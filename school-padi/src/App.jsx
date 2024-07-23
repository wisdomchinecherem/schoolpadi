// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Navbar from './components/Landingpage/Navbar';
import Footer from './components/Landingpage/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return (
    <div>
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
      </Routes>
    </Router>
  );
};

export default App;
