
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      category: "General Dermatology",
      description: "Comprehensive medical dermatology services for all skin conditions",
      services: [
        {
          name: "Skin Cancer Screening",
          description: "Comprehensive full-body skin examinations using dermoscopy and digital mapping to detect early signs of skin cancer. Our board-certified dermatologists perform thorough assessments and provide detailed follow-up care.",
          price: "£150"
        },
        {
          name: "Acne Treatment",
          description: "Personalized acne treatment plans including topical medications, oral therapies, and advanced procedures like chemical peels and light therapy. We treat all types of acne from mild to severe cystic acne.",
          price: "£120"
        },
        {
          name: "Eczema Management", 
          description: "Comprehensive eczema care including trigger identification, prescription treatments, and lifestyle modifications. We provide ongoing support and monitoring for optimal skin health.",
          price: "£110"
        },
        {
          name: "Psoriasis Treatment",
          description: "Advanced psoriasis treatments including biologics, phototherapy, and topical therapies. Our specialists work with you to find the most effective treatment plan for your specific needs.",
          price: "£130"
        }
      ]
    },
    {
      category: "Cosmetic Dermatology",
      description: "Advanced aesthetic treatments to enhance your natural beauty",
      services: [
        {
          name: "Botox Injections",
          description: "Professional Botox treatments for wrinkle reduction and facial rejuvenation. Our expert injectors provide natural-looking results with minimal downtime.",
          price: "£200-400"
        },
        {
          name: "Dermal Fillers",
          description: "Premium dermal fillers for volume restoration, lip enhancement, and facial contouring. We use only FDA-approved products for safe, long-lasting results.",
          price: "£300-600"
        },
        {
          name: "Chemical Peels",
          description: "Professional chemical peels to improve skin texture, reduce fine lines, and address pigmentation issues. Available in light, medium, and deep peel options.",
          price: "£80-250"
        },
        {
          name: "Laser Hair Removal",
          description: "State-of-the-art laser technology for permanent hair reduction on all skin types. Multiple sessions ensure optimal results with minimal discomfort.",
          price: "£100-500"
        }
      ]
    },
    {
      category: "Skin Cancer Treatment",
      description: "Expert diagnosis and treatment using the latest technology",
      services: [
        {
          name: "Mohs Surgery",
          description: "Precision skin cancer surgery with the highest cure rates. This specialized procedure removes cancer while preserving healthy tissue, ideal for sensitive areas like the face.",
          price: "£800-1200"
        },
        {
          name: "Skin Biopsies",
          description: "Expert tissue sampling and analysis for accurate diagnosis of skin conditions. Results typically available within 7-10 days with detailed pathology reports.",
          price: "£180"
        },
        {
          name: "Cryotherapy",
          description: "Liquid nitrogen treatment for various skin lesions including warts, age spots, and pre-cancerous lesions. Quick, effective treatment with minimal scarring.",
          price: "£75-150"
        },
        {
          name: "Photodynamic Therapy",
          description: "Advanced light-based treatment for certain types of skin cancer and pre-cancerous conditions. Non-invasive alternative to traditional surgery.",
          price: "£400-600"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-clinic-gold-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-clinic-blue mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dermatological care using the latest technology and techniques 
            to ensure the best outcomes for our patients.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-clinic-blue mb-4">{category.category}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>

              <div className="grid gap-6">
                {category.services.map((service, serviceIndex) => {
                  const globalIndex = categoryIndex * 10 + serviceIndex;
                  const isExpanded = expandedService === globalIndex;
                  
                  return (
                    <Card key={serviceIndex} className="border-2 border-gray-100 hover:border-clinic-gold transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleService(globalIndex)}>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-clinic-blue">{service.name}</CardTitle>
                            <p className="text-clinic-gold font-semibold mt-1">{service.price}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {isExpanded && (
                        <CardContent className="pt-0">
                          <p className="text-gray-600 leading-relaxed">{service.description}</p>
                          <div className="mt-4">
                            <Link to="/book">
                              <Button className="bg-clinic-blue hover:bg-clinic-blue-light">
                                Book This Service
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clinic-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards healthier, more beautiful skin.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-clinic-gold hover:bg-clinic-gold/90 text-clinic-blue">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
