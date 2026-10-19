// components/Contact.tsx

import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';
import { profile } from '@/lib/profile';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: 'Email',
    content: profile.email,
    action: `mailto:${profile.email}`,
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: 'Phone',
    content: profile.phone.display,
    action: profile.phone.href,
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: 'Location',
    content: `${profile.location} · open to hybrid or remote`,
    action: null,
  },
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    name: 'GitHub',
    url: profile.github,
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    name: 'LinkedIn',
    url: profile.linkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-foreground">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Hiring for analytics leadership, or need help turning your data into decisions? I'd like to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I'm open to new opportunities, collaborations, or simply a conversation about data,
                especially in clean energy, climate and international development.
              </p>
            </div>

            {/* Contact Cards: whole card is the tap target */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item) => {
                const body = (
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className={`text-muted-foreground break-words ${item.action ? 'group-hover:text-primary transition-colors' : ''}`}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                );
                return item.action ? (
                  <a key={item.title} href={item.action} className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Card className="hover:shadow-card transition-all duration-300">{body}</Card>
                  </a>
                ) : (
                  <Card key={item.title}>{body}</Card>
                );
              })}
            </div>

            {/* Social Links + CV */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Find me online</h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    asChild
                    className="h-11 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  </Button>
                ))}
                <Button
                  variant="outline"
                  asChild
                  className="h-11 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href={profile.resume} download>
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-card">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-foreground">Send a Message</h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
