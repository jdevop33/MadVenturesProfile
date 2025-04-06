import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // In a real application, you would submit this data to your backend
    form.reset();
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 mr-3 mt-1" />,
      title: "Location",
      value: "Victoria, BC, Canada",
    },
    {
      icon: <Mail className="h-6 w-6 mr-3 mt-1" />,
      title: "Email",
      value: "contact@madventures.com",
    },
    {
      icon: <Phone className="h-6 w-6 mr-3 mt-1" />,
      title: "Phone",
      value: "+1 (250) 555-0123",
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, label: "Facebook", href: "#" },
    { icon: <Twitter className="h-6 w-6" />, label: "Twitter", href: "#" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "#" },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have a startup idea or looking for investment opportunities? Let's connect.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-6">
                  Feel free to reach out with any questions about our services or investment opportunities.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      {item.icon}
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-primary-200">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Connect with us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="text-white hover:text-primary-200 transition"
                      >
                        <span className="sr-only">{link.label}</span>
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-gray-50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} className="bg-gray-50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" {...field} className="bg-gray-50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              {...field}
                              className="bg-gray-50"
                              rows={4}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
