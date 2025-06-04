
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookAppointment = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    timeSlot: "",
    notes: ""
  });

  const serviceTypes = [
    "General Consultation",
    "Skin Cancer Screening",
    "Acne Treatment",
    "Cosmetic Consultation",
    "Botox/Fillers",
    "Laser Treatment",
    "Chemical Peel",
    "Follow-up Appointment"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a date for your appointment.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Requested!",
      description: "We'll confirm your appointment within 24 hours via email or phone.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      timeSlot: "",
      notes: ""
    });
    setDate(undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-clinic-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-clinic-blue mb-6">Book an Appointment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your consultation with our expert dermatologists. We'll work with you to 
              address your skin concerns and create a personalized treatment plan.
            </p>
          </div>

          <Card className="border-2 border-gray-100 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-clinic-blue text-center">
                Appointment Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-clinic-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-clinic-blue"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-clinic-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Service *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange("serviceType", value)}>
                    <SelectTrigger className="border-gray-300 focus:border-clinic-blue">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal border-gray-300",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0 || date.getDay() === 6
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("timeSlot", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-clinic-blue">
                        <SelectValue placeholder="Select a time..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes or Concerns
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-clinic-blue"
                    placeholder="Please describe any specific skin concerns or questions you'd like to discuss..."
                  />
                </div>

                <div className="bg-clinic-cream p-6 rounded-lg">
                  <h3 className="font-semibold text-clinic-blue mb-2">Important Information:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Please arrive 15 minutes early for your appointment</li>
                    <li>• Bring a list of current medications and medical history</li>
                    <li>• Avoid sun exposure for 48 hours before certain treatments</li>
                    <li>• We'll confirm your appointment within 24 hours</li>
                    <li>• Cancellations require 24-hour notice</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-clinic-blue hover:bg-clinic-blue-light text-lg py-6"
                >
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment;
