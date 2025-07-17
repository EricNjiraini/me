// components/ContactForm.tsx

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email().max(100),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000)
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const sanitizeInput = (input: string) =>
  input.replace(/[<>]/g, '').replace(/javascript:/gi, '').trim();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const sanitizedData = {
        firstName: sanitizeInput(data.firstName),
        lastName: sanitizeInput(data.lastName),
        email: sanitizeInput(data.email),
        subject: sanitizeInput(data.subject),
        message: sanitizeInput(data.message)
      };

      const response = await fetch("https://formspree.io/f/xdkdkopy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(sanitizedData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon."
        });
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name <span className="text-destructive">*</span></label>
          <Input {...register('firstName')} placeholder="John" className={errors.firstName ? 'border-destructive' : ''} />
          {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name <span className="text-destructive">*</span></label>
          <Input {...register('lastName')} placeholder="Doe" className={errors.lastName ? 'border-destructive' : ''} />
          {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email <span className="text-destructive">*</span></label>
        <Input type="email" {...register('email')} placeholder="john@example.com" className={errors.email ? 'border-destructive' : ''} />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subject <span className="text-destructive">*</span></label>
        <Input {...register('subject')} placeholder="Project Inquiry" className={errors.subject ? 'border-destructive' : ''} />
        {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message <span className="text-destructive">*</span></label>
        <Textarea {...register('message')} rows={5} placeholder="Tell me about your project..." className={errors.message ? 'border-destructive' : ''} />
        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow disabled:opacity-50">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
