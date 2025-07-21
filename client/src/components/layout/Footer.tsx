import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <img src="/images/Sokkawhite.png" alt="Logo" className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Sokka</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for character-inspired t-shirts from anime, movies, and TV series.
              Quality designs that let you wear your fandom with pride.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Categories
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Customer Service</h3>
            <nav className="space-y-2">
              <Link to="/shipping" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/size-guide" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link to="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get special offers, free giveaways, and new product announcements.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="w-full" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>support@sokka.com</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>123 Fan Street, Otaku City, FC 12345</span>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sokka. All rights reserved. Made with ❤️ for fans worldwide.</p>
        </div>
      </div>
    </footer>
  );
}