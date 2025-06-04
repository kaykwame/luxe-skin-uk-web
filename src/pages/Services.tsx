
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      title: "General Dermatology",
      description: "Comprehensive medical dermatology services for all skin conditions",
      services: [
        {
          name: "Skin Cancer Screening",
          description: "Comprehensive full-body skin examinations using advanced dermatoscopy to detect early signs of skin cancer. Our board-certified dermatologists perform thorough assessments and recommend appropriate follow-up care."
        },
        {
          name: "Acne Treatment",
          description: "Personalized acne treatment plans including topical medications, oral therapies, and advanced procedures like chemical peels and laser treatments. We address all types of acne from mild to severe cystic acne."
        },
        {
          name: "Eczema Management",
          description: "Expert care for atopic dermatitis and other forms of eczema. Treatment includes prescription therapies, lifestyle modifications, and patient education to manage flare-ups and maintain healthy skin."
        },
        {
          name: "Psoriasis Care",
          description: "Comprehensive psoriasis treatment using the latest therapies including biologics, topical treatments, and phototherapy. We create individualized treatment plans to control symptoms and improve quality of life."
        }
      ]
    },
    {
      title: "Cosmetic Dermatology",
      description: "Advanced aesthetic treatments to enhance your natural beauty",
      services: [
        {
          name: "Botox Injections",
          description: "FDA-approved botulinum toxin treatments to reduce fine lines and wrinkles. Our expert practitioners provide natural-looking results for crow's feet, forehead lines, and frown lines."
        },
        {
          name: "Dermal Fillers",
          description: "Hyaluronic acid fillers to restore volume, enhance facial contours, and smooth deep wrinkles. We offer various filler types to achieve your aesthetic goals safely and effectively."
        },
        {
          name: "Chemical Peels",
          description: "Professional-grade chemical peels to improve skin texture, reduce pigmentation, and promote cellular renewal. Options range from light glycolic peels to deeper TCA treatments."
        },
        {
          name: "Laser Treatments",
          description: "State-of-the-art laser technology for various skin concerns including hair removal, pigmentation, vascular lesions, and skin resurfacing. Customized treatments for optimal results."
        }
      ]
    },
    {
      title: "Specialized Treatments",
      description: "Advanced procedures for specific dermatological conditions",
      services: [
        {
          name: "Mohs Surgery",
          description: "Precision surgical technique for skin cancer removal with the highest cure rates. Our Mohs surgeon removes cancerous tissue layer by layer while preserving healthy tissue."
        },
        {
          name: "Photodynamic Therapy",
          description: "Advanced treatment for actinic keratoses and certain types of skin cancer using light-activated medications. Minimally invasive with excellent cosmetic outcomes."
        },
        {
          name: "Laser Hair Removal",
          description: "Permanent hair reduction using medical-grade laser technology. Safe and effective for all skin types with minimal discomfort and excellent long-term results."
        },
        {
          name: "Scar Treatment",
          description: "Comprehensive scar management including laser therapy, steroid injections, and surgical revision. We treat acne scars, surgical scars, and traumatic scars."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-clinic-blue mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dermatological care using the latest technology and evidence-based treatments. 
              Our expert team is dedicated to helping you achieve healthy, beautiful skin.
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-clinic-blue mb-4">{category.title}</h2>
                  <p className="text-gray-600 text-lg">{category.description}</p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <AccordionItem 
                      key={serviceIndex} 
                      value={`${categoryIndex}-${serviceIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:text-clinic-blue text-lg font-semibold">
                        {service.name}
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-6">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-clinic-blue rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert dermatologists to discuss your skin concerns 
                and develop a personalized treatment plan.
              </p>
              <Link to="/book">
                <Button size="lg" variant="secondary" className="bg-clinic-gold hover:bg-clinic-gold-light text-clinic-blue">
                  Book Your Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
