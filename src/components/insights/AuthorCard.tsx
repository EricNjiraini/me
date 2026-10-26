import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/profile';
import { cn } from '@/lib/utils';

const AuthorCard = ({ className }: { className?: string }) => (
  <aside
    aria-label="About the author"
    className={cn('flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 rounded-xl border border-border bg-card p-5 sm:p-6', className)}
  >
    <img
      src="/eric-njiraini.webp"
      alt=""
      width={400}
      height={400}
      loading="lazy"
      className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
    />
    <div className="flex-1">
      <p className="font-semibold text-foreground">{profile.name}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {profile.role} in {profile.location}, leading data and AI strategy at Burn Manufacturing.
      </p>
    </div>
    <div className="flex gap-2">
      <Button asChild variant="outline" className="flex-1 sm:flex-none">
        <a href={profile.resume} download>
          <Download /> Download CV
        </a>
      </Button>
      <Button asChild className="flex-1 sm:flex-none">
        <Link to="/#contact">Get in touch</Link>
      </Button>
    </div>
  </aside>
);

export default AuthorCard;
