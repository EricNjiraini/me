// components/Contact.tsx

import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: 'Email',
    content: 'your.email@example.com',
    action: 'mailto:your.email@example.com',
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: 'Location',
    content: 'Your City, Country',
    action: null,
  },
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    name: 'GitHub',
    url: 'https://github.com/EricNjiraini',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/eric-njiraini',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next data project? Let’s turn your data into insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I’m always open to new opportunities, collaborations, or simply chatting about data analytics and visualization.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        {item.action ? (
                          <a href={item.action} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="ml-2">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;




// import { Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { toast } from '@/hooks/use-toast';
// import ContactForm from './ContactForm'; // 

// // Form validation schema
// const contactFormSchema = z.object({
//   firstName: z.string()
//     .min(2, 'First name must be at least 2 characters')
//     .max(50, 'First name must be less than 50 characters')
//     .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
//   lastName: z.string()
//     .min(2, 'Last name must be at least 2 characters')
//     .max(50, 'Last name must be less than 50 characters')
//     .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
//   email: z.string()
//     .email('Please enter a valid email address')
//     .max(100, 'Email must be less than 100 characters'),
//   subject: z.string()
//     .min(5, 'Subject must be at least 5 characters')
//     .max(100, 'Subject must be less than 100 characters'),
//   message: z.string()
//     .min(10, 'Message must be at least 10 characters')
//     .max(1000, 'Message must be less than 1000 characters')
// });

// type ContactFormData = z.infer<typeof contactFormSchema>;

// // Input sanitization function
// const sanitizeInput = (input: string): string => {
//   return input
//     .replace(/[<>]/g, '') // Remove potential HTML tags
//     .replace(/javascript:/gi, '') // Remove javascript: protocols
//     .trim();
// };

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactFormSchema)
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     try {
//       // Sanitize all inputs
//       const sanitizedData = {
//         firstName: sanitizeInput(data.firstName),
//         lastName: sanitizeInput(data.lastName),
//         email: sanitizeInput(data.email),
//         subject: sanitizeInput(data.subject),
//         message: sanitizeInput(data.message)
//       };

//       // Simulate form submission (replace with actual API call when backend is ready)
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       console.log('Sanitized form data:', sanitizedData);
      
//       toast({
//         title: "Message sent successfully!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
      
//       reset();
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6 text-primary" />,
//       title: "Email",
//       content: "your.email@example.com",
//       action: "mailto:your.email@example.com"
//     },
//     {
//       icon: <Phone className="w-6 h-6 text-primary" />,
//       title: "Phone",
//       content: "+1 (555) 123-4567",
//       action: "tel:+15551234567"
//     },
//     {
//       icon: <MapPin className="w-6 h-6 text-primary" />,
//       title: "Location",
//       content: "Your City, State",
//       action: null
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <Github className="w-5 h-5" />,
//       name: "GitHub",
//       url: "https://github.com/EricNjiraini"
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       name: "LinkedIn", 
//       url: "https://linkedin.com/in/ericnjiraini"
//     },
//     {
//       icon: <MessageSquare className="w-5 h-5" />,
//       name: "Blog",
//       url: "https://yourblog.com"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-subtle">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Ready to collaborate on your next data project? Let's discuss how we can turn your data into insights.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
//               <p className="text-muted-foreground text-lg leading-relaxed mb-8">
//                 I'm always excited to discuss new opportunities, collaborate on interesting projects, 
//                 or simply chat about data analytics and visualization. Feel free to reach out through 
//                 any of the channels below.
//               </p>
//             </div>

//             <div className="space-y-4">
//               {contactInfo.map((item, index) => (
//                 <Card key={index} className="hover:shadow-card transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="flex items-center gap-4">
//                       {item.icon}
//                       <div>
//                         <h4 className="font-semibold text-foreground">{item.title}</h4>
//                         {item.action ? (
//                           <a 
//                             href={item.action} 
//                             className="text-muted-foreground hover:text-primary transition-colors"
//                           >
//                             {item.content}
//                           </a>
//                         ) : (
//                           <p className="text-muted-foreground">{item.content}</p>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <Button
//                     key={index}
//                     variant="outline"
//                     size="sm"
//                     asChild
//                     className="hover:bg-primary hover:text-primary-foreground transition-colors"
//                   >
//                     <a href={social.url} target="_blank" rel="noopener noreferrer">
//                       {social.icon}
//                       <span className="ml-2">{social.name}</span>
//                     </a>
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className="bg-card/80 backdrop-blur-sm shadow-card">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       First Name <span className="text-destructive">*</span>
//                     </label>
//                     <Input 
//                       placeholder="John"
//                       {...register('firstName')}
//                       className={errors.firstName ? 'border-destructive' : ''}
//                     />
//                     {errors.firstName && (
//                       <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Last Name <span className="text-destructive">*</span>
//                     </label>
//                     <Input 
//                       placeholder="Doe"
//                       {...register('lastName')}
//                       className={errors.lastName ? 'border-destructive' : ''}
//                     />
//                     {errors.lastName && (
//                       <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
//                     )}
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Email <span className="text-destructive">*</span>
//                   </label>
//                   <Input 
//                     type="email" 
//                     placeholder="john@example.com"
//                     {...register('email')}
//                     className={errors.email ? 'border-destructive' : ''}
//                   />
//                   {errors.email && (
//                     <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Subject <span className="text-destructive">*</span>
//                   </label>
//                   <Input 
//                     placeholder="Project Collaboration"
//                     {...register('subject')}
//                     className={errors.subject ? 'border-destructive' : ''}
//                   />
//                   {errors.subject && (
//                     <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Message <span className="text-destructive">*</span>
//                   </label>
//                   <Textarea 
//                     placeholder="Tell me about your project or how we can work together..."
//                     rows={5}
//                     {...register('message')}
//                     className={errors.message ? 'border-destructive' : ''}
//                   />
//                   {errors.message && (
//                     <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
//                   )}
//                 </div>
                
//                 <Button 
//                   type="submit" 
//                   size="lg" 
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
//                 >
//                   {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
