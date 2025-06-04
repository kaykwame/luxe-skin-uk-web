
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London",
      text: "The team at Luxe Skin Clinic is absolutely wonderful. Dr. Smith helped me with my skin concerns and the results have been amazing. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Manchester",
      text: "Professional, caring, and knowledgeable staff. The clinic is modern and clean. I felt comfortable throughout my treatment.",
      rating: 5
    },
    {
      name: "Emily Davis",
      location: "Birmingham",
      text: "Excellent service from start to finish. The consultation was thorough and the treatment plan was exactly what I needed.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-clinic-cream to-clinic-gold-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinic-blue mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-clinic-gold">★</div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-clinic-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
