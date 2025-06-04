
import { Button } from "@/components/ui/button";
import { Calendar, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-clinic-cream to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f7e6a3" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-clinic-blue leading-tight">
                Trusted Skin Care
                <span className="block text-clinic-gold">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience professional dermatology and aesthetic treatments with our expert team. 
                Your skin health is our priority.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book">
                <Button size="lg" className="bg-clinic-blue hover:bg-clinic-blue-light text-lg px-8 py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book an Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-clinic-blue text-clinic-blue hover:bg-clinic-blue hover:text-white text-lg px-8 py-6">
                  Our Services
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-clinic-blue">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clinic-blue">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clinic-blue">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-clinic-blue to-clinic-blue-light rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-clinic-gold/20 to-transparent flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold mb-2">Professional Care</h3>
                  <p className="text-white/80">Expert dermatology treatments</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-clinic-gold rounded-full opacity-80"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-clinic-gold-light rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-clinic-blue" />
      </div>
    </div>
  );
};

export default Hero;
