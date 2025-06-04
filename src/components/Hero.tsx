
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-clinic-cream via-white to-clinic-gold-light/30">
      <div className="absolute inset-0 bg-gradient-to-r from-clinic-blue/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-clinic-blue mb-8 leading-tight">
            Trusted Skin Care
            <span className="block text-clinic-gold">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert dermatological care with a personal touch. Our experienced team is dedicated 
            to helping you achieve healthy, radiant skin through advanced treatments and 
            compassionate care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/book">
              <Button size="lg" className="bg-clinic-blue hover:bg-clinic-blue-light text-white px-8 py-4 text-lg">
                Book an Appointment
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-clinic-gold text-clinic-blue hover:bg-clinic-gold hover:text-white px-8 py-4 text-lg"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-clinic-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-clinic-blue mb-3">Expert Care</h3>
            <p className="text-gray-600">Board-certified dermatologists with years of experience in medical and cosmetic treatments.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-clinic-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-clinic-blue mb-3">Advanced Technology</h3>
            <p className="text-gray-600">State-of-the-art equipment and cutting-edge treatments for optimal results.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-clinic-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-clinic-blue mb-3">Personalized Treatment</h3>
            <p className="text-gray-600">Customized treatment plans tailored to your unique skin needs and goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
