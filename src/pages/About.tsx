
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-clinic-blue mb-6">About Luxe Skin Clinic</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing exceptional dermatological care with a personal touch. 
              Our expert team combines years of experience with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-clinic-blue">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2008, Luxe Skin Clinic has been at the forefront of dermatological care in the UK. 
                Our mission is to provide comprehensive, compassionate, and cutting-edge skin care solutions 
                to help our patients achieve healthy, beautiful skin.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that everyone deserves to feel confident in their skin. Our team of board-certified 
                dermatologists and aesthetic specialists work together to create personalized treatment plans 
                that address each patient's unique needs and goals.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-blue">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-blue">5000+</div>
                  <div className="text-sm text-gray-600">Satisfied Patients</div>
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
                    <h3 className="text-2xl font-playfair font-semibold mb-2">Expert Care</h3>
                    <p className="text-white/80">Board-certified specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-clinic-blue text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-100 hover:border-clinic-gold transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-clinic-blue to-clinic-blue-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <CardTitle className="text-clinic-blue">Dr. Sarah Mitchell</CardTitle>
                  <p className="text-clinic-gold font-medium">Lead Dermatologist</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Board-certified dermatologist with over 15 years of experience. Specializes in 
                    medical dermatology and skin cancer treatment.
                  </p>
                  <div>
                    <h4 className="font-semibold text-clinic-blue mb-2">Credentials:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• MD from Imperial College London</li>
                      <li>• Fellowship in Dermatopathology</li>
                      <li>• Member of British Association of Dermatologists</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-clinic-gold transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-clinic-gold to-clinic-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <CardTitle className="text-clinic-blue">Dr. James Thompson</CardTitle>
                  <p className="text-clinic-gold font-medium">Aesthetic Specialist</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Expert in cosmetic dermatology and non-surgical aesthetic treatments. 
                    Passionate about helping patients achieve natural-looking results.
                  </p>
                  <div>
                    <h4 className="font-semibold text-clinic-blue mb-2">Credentials:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• MD from University of Edinburgh</li>
                      <li>• Advanced training in Aesthetic Medicine</li>
                      <li>• Certified in Laser and Energy Devices</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-clinic-blue text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-clinic-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-clinic-blue mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for the highest standards in everything we do, from patient care to treatment outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-clinic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-clinic-blue mb-2">Compassion</h3>
                <p className="text-gray-600 text-sm">
                  Every patient is treated with empathy, respect, and understanding throughout their journey.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-clinic-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-clinic-blue mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We embrace the latest technologies and techniques to provide cutting-edge treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
