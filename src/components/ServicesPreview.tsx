
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      title: "General Dermatology",
      description: "Comprehensive skin health assessments and treatment of common skin conditions.",
      features: ["Skin cancer screening", "Acne treatment", "Eczema management", "Psoriasis care"]
    },
    {
      title: "Cosmetic Dermatology",
      description: "Advanced aesthetic treatments to enhance your natural beauty.",
      features: ["Botox injections", "Dermal fillers", "Chemical peels", "Laser treatments"]
    },
    {
      title: "Skin Cancer Treatment",
      description: "Expert diagnosis and treatment of skin cancer with cutting-edge technology.",
      features: ["Mohs surgery", "Skin biopsies", "Cancer screening", "Preventive care"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinic-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive dermatological services using the latest technology and techniques 
            to ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-clinic-gold transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-clinic-blue">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-clinic-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-clinic-blue hover:bg-clinic-blue-light">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
