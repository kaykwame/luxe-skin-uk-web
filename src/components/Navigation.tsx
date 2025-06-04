
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-clinic-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-playfair text-2xl font-semibold text-clinic-blue">
              Luxe Skin Clinic
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-clinic-blue ${
                isActive("/") ? "text-clinic-blue" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-clinic-blue ${
                isActive("/about") ? "text-clinic-blue" : "text-gray-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-clinic-blue ${
                isActive("/services") ? "text-clinic-blue" : "text-gray-600"
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-clinic-blue ${
                isActive("/contact") ? "text-clinic-blue" : "text-gray-600"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+17744189854"
              className="hidden sm:flex items-center space-x-2 text-clinic-blue hover:text-clinic-blue-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(774) 418-9854</span>
            </a>
            <Link to="/book">
              <Button className="bg-clinic-blue hover:bg-clinic-blue-light">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
