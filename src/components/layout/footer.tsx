import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'All Products' },
    { href: '/contact', label: 'Contact' },
    { href: '/account', label: 'My Account' },
  ];
  
  const categories = [
    { href: '/products?category=LED+Lights', label: 'LED Lights' },
    { href: '/products?category=Chandeliers', label: 'Chandeliers' },
    { href: '/products?category=Decorative+Lights', label: 'Decorative Lights' },
    { href: '/products?category=Ceiling+Lights', label: 'Ceiling Lights' },
  ];

  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg font-headline">Ramdev Emporium</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop destination for premium lighting solutions in Khammam. We offer a wide range of products from leading brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 shrink-0 text-primary" />
                <span>Wrya Khammam Road, Khammam, Telangana</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-3 mt-0.5 shrink-0 text-primary" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91-123-456-7890</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-3 mt-0.5 shrink-0 text-primary" />
                <a href="mailto:contact@ramdevemporium.com" className="hover:text-primary transition-colors">contact@ramdevemporium.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-3 mt-0.5 shrink-0 text-primary" />
                <span>Open: 09:00 - 21:30 Daily</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold">We Accept:</p>
              <p className="text-xs text-muted-foreground">Cash, UPI, Paytm, PhonePe, Net Banking, Cheque / Demand Draft</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ramdev Emporium Online. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
