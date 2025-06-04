
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-clinic-blue mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your skin care needs. Reach out to us for appointments, 
              questions, or more information about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-2 border-gray-100 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-clinic-blue">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-clinic-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-clinic-blue"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-clinic-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-clinic-blue"
                        placeholder="Please describe your skin concerns or questions..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-clinic-blue hover:bg-clinic-blue-light">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-gray-100 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-clinic-blue">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-clinic-blue p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-clinic-blue">Phone</h3>
                      <p className="text-gray-600">(774) 418-9854</p>
                      <p className="text-sm text-gray-500">Call for appointments or urgent concerns</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-clinic-gold p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-clinic-blue">Email</h3>
                      <p className="text-gray-600">xyz@gmail.com</p>
                      <p className="text-sm text-gray-500">For general inquiries and information</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-clinic-blue-light p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-clinic-blue">Address</h3>
                      <p className="text-gray-600">
                        26 Court Street, Suite 1600<br />
                        Brooklyn, NY
                      </p>
                      <p className="text-sm text-gray-500">Easy access with parking available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-clinic-gold-light p-3 rounded-full">
                      <Clock className="w-6 h-6 text-clinic-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-clinic-blue">Office Hours</h3>
                      <p className="text-gray-600">Monday – Friday: 9AM – 5PM</p>
                      <p className="text-sm text-gray-500">Closed weekends and holidays</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-clinic-blue to-clinic-blue-light rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-clinic-gold/20 to-transparent flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Visit Our Clinic</h3>
                        <p className="text-white/80">Located in the heart of Brooklyn</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
