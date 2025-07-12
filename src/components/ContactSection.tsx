import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Our Showroom',
      details: ['Casablanca, Morocco', 'By Appointment Only']
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: ['+212 522 XXX XXX', 'Mon-Sat 9AM-6PM']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: ['info@afiniscaftan.com', 'We reply within 24h']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Ready to create your perfect kaftan or have questions about our collections? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6" style={{ fontFamily: 'Montserrat' }}>
                Let's Create Something Beautiful Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a ready-to-wear piece or want to design a custom kaftan, 
                our team is here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-[var(--shadow-soft)]">
                  <div className="text-secondary bg-secondary/10 p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-luxury">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-luxury"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-gray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-luxury"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-deep-gray mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-luxury"
                  placeholder="+212 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-gray mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-luxury resize-none"
                  placeholder="Tell us about your requirements, preferred styles, or any questions you have..."
                />
              </div>

              <Button type="submit" className="btn-primary-luxury w-full group">
                <Send className="mr-2 h-5 w-5" />
                Send Message
                <div className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;