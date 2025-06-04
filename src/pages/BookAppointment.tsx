
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    timeSlot: "",
    notes: ""
  });

  const services = [
    "General Consultation",
    "Skin Cancer Screening", 
    "Acne Treatment",
    "Botox Injection",
    "Dermal Fillers",
    "Chemical Peel",
    "Laser Hair Removal",
    "Other"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      toast("Please select an appointment date.");
      return;
    }
    console.log("Appointment booked:", { ...formData, date: selectedDate });
    toast("Appointment request submitted! We'll confirm your booking within 24 hours.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      timeSlot: "",
      notes: ""
    });
    setSelectedDate(undefined);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-clinic-gold-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-clinic-blue mb-6">Book an Appointment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your consultation with our expert dermatologists. 
            We'll help you achieve your skin health goals.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-clinic-blue text-center">Schedule Your Visit</CardTitle>
              <p className="text-gray-600 text-center">Please fill out the form below to request an appointment.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-clinic-blue mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-clinic-blue mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-clinic-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-clinic-blue mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-clinic-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-clinic-blue mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-clinic-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-clinic-blue mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-clinic-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-lg font-semibold text-clinic-blue mb-4">Appointment Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-clinic-blue mb-2">
                        Service Type *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("service", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-clinic-blue">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-clinic-blue mb-2">
                        Preferred Date *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-gray-300",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-clinic-blue mb-2">
                      Preferred Time *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("timeSlot", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-clinic-blue">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-clinic-blue mb-2">
                    Additional Notes
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-clinic-blue min-h-[100px]"
                    placeholder="Please describe your skin concerns or any specific questions you have..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-clinic-blue hover:bg-clinic-blue-light px-12 py-3"
                    size="lg"
                  >
                    Request Appointment
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-clinic-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-clinic-blue mb-4">Need Help Booking?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or need immediate assistance, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-clinic-blue text-clinic-blue hover:bg-clinic-blue hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call (774) 418-9854
            </Button>
            <Button variant="outline" className="border-clinic-gold text-clinic-blue hover:bg-clinic-gold hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Email xyz@gmail.com
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment;
