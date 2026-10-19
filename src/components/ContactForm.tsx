import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Inputs use h-11 and text-base on phones: 44px tap targets, and 16px text stops iOS zooming on focus.
const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xdkdkopy"
      method="POST"
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" className="h-11" required />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" className="h-11" required />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="off"
          spellCheck={false}
          className="h-11"
          required
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" className="h-11" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} className="text-base md:text-sm" required />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
