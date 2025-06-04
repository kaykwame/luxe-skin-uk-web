
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-clinic-gold-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-clinic-blue mb-6">About Luxe Skin Clinic</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing exceptional dermatological care with a personal touch since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-clinic-blue mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Luxe Skin Clinic was founded with a simple mission: to provide world-class dermatological care 
                in a comfortable, welcoming environment. Our state-of-the-art facility combines cutting-edge 
                technology with a patient-centered approach to deliver exceptional results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that healthy skin is the foundation of confidence, and we're committed to helping 
                our patients achieve their skin health goals through personalized treatment plans and 
                comprehensive care.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-gold mb-2">500+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinic-gold mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-clinic-blue rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-clinic-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">LC</span>
                  </div>
                  <p className="text-gray-600 italic">Professional clinic environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-clinic-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinic-blue mb-4">Our Medical Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Board-certified dermatologists with extensive experience in medical and cosmetic treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-clinic-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">DS</span>
                </div>
                <CardTitle className="text-clinic-blue text-2xl">Dr. Sarah Mitchell</CardTitle>
                <p className="text-clinic-gold font-medium">Lead Dermatologist</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <h4 className="font-semibold text-clinic-blue mb-2">Credentials</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>MD, University of Cambridge</li>
                    <li>Board Certified Dermatologist</li>
                    <li>15+ years experience</li>
                    <li>Specialist in skin cancer treatment</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Mitchell specializes in medical dermatology with a focus on skin cancer detection 
                  and treatment. She is passionate about patient education and preventive care.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-clinic-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">JR</span>
                </div>
                <CardTitle className="text-clinic-blue text-2xl">Dr. James Rodriguez</CardTitle>
                <p className="text-clinic-gold font-medium">Cosmetic Dermatologist</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <h4 className="font-semibold text-clinic-blue mb-2">Credentials</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>MD, Oxford University</li>
                    <li>Fellowship in Cosmetic Dermatology</li>
                    <li>12+ years experience</li>
                    <li>Expert in laser treatments</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Rodriguez focuses on cosmetic dermatology and anti-aging treatments. He combines 
                  artistry with medical expertise to achieve natural-looking results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinic-blue mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-clinic-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-clinic-blue mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from patient care to treatment outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-clinic-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-clinic-blue mb-3">Compassion</h3>
              <p className="text-gray-600">
                Every patient receives personalized attention and care in a comfortable, supportive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-clinic-blue-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-clinic-blue mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of dermatological advances to offer the latest treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
