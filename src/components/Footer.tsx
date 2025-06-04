
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-clinic-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-clinic-gold rounded-full flex items-center justify-center">
                <span className="text-clinic-blue font-bold text-lg">L</span>
              </div>
              <span className="font-playfair text-2xl font-semibold">
                Luxe Skin Clinic
              </span>
            </div>
            <p className="text-blue-200">
              Professional dermatology and aesthetic treatments with expert care for all your skin health needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/book" className="text-blue-200 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>General Dermatology</li>
              <li>Cosmetic Treatments</li>
              <li>Skin Cancer Treatment</li>
              <li>Laser Therapy</li>
              <li>Chemical Peels</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-clinic-gold" />
                <span className="text-blue-200">(774) 418-9854</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-clinic-gold" />
                <span className="text-blue-200">xyz@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-clinic-gold mt-1" />
                <span className="text-blue-200">
                  26 Court Street, Suite 1600<br />
                  Brooklyn, NY
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <p className="text-blue-200 text-sm">Mon–Fri, 9AM–5PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Luxe Skin Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
