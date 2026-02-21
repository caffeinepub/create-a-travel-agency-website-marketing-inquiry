import { Link, Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, Plane } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ChatWidget from '@/components/chat/ChatWidget';

export default function SiteLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/assets/generated/travel-logo.dim_512x512.png" 
              alt="Leisureflies Travels Pvt Ltd" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-xl font-bold text-primary">
              Leisureflies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={() => navigate({ to: '/contact' })} size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.href) ? 'text-primary' : 'text-foreground/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate({ to: '/contact' });
                  }} 
                  className="mt-4"
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-6 w-6 text-primary" />
                <span className="font-display text-lg font-bold">
                  Leisureflies Travels Pvt Ltd
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md mb-4">
                Creating unforgettable travel experiences around the world. 
                Your journey begins here.
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Email: info@leisureflies.com</p>
                <p>Phone: +91 172 4620087</p>
                <p>Website: www.leisureflies.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Offices</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <p className="font-medium text-foreground">Chandigarh</p>
                  <p>SCO 70, Second Floor</p>
                  <p>Sector 38-C</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Panchkula</p>
                  <p>SCO 15, Second Floor</p>
                  <p>Sector 10, 134109</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Leisureflies Travels Pvt Ltd. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'leisureflies'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
