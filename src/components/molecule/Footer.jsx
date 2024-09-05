// Footer.jsx
import SchoolLogo from "../../assets/schoolpadi-img/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001D3B] text-white py-8 border-t border-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-grow border-t border-white mr-4"></div>

          {/* Center Content */}
          <div className="flex items-center space-x-2">
            <span>We are powered by</span>
            <img src={SchoolLogo} alt="School Logo" className="h-8 w-auto object-contain" />
          </div>

          {/* Right Line */}
          <div className="flex-grow border-t border-white ml-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
