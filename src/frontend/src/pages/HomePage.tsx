import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Shield, Award } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: MapPin,
      title: 'Curated Destinations',
      description: 'Handpicked locations that offer authentic and memorable experiences.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Travel specialists with decades of combined experience to guide you.',
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'IATA-accredited and TAAI-certified for your peace of mind.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in travel planning and customer service.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Your Journey Begins Here"
        description="Leisureflies Travels Pvt Ltd - Full service travel management company offering luxury holidays, air tickets, hotels, visa consultation, and comprehensive travel solutions. IATA-accredited and TAAI-certified since 2010."
        keywords="travel agency, luxury holidays, air tickets, hotel booking, visa consultation, Chandigarh travel agency, Panchkula travel, IATA certified, TAAI certified"
        ogType="website"
      />
      <StructuredData />

      <div>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/generated/travel-hero.dim_1600x900.png"
              alt="Leisureflies luxury travel destinations around the world"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Your Journey Begins Here
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Discover extraordinary destinations and create memories that last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/destinations' })}>
                Explore Destinations
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/packages' })}>
                View Packages
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Choose Leisureflies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to making your travel dreams a reality with personalized service and attention to detail
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="border-none shadow-soft">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-none shadow-soft">
              <CardContent className="p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Adventure?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let us help you plan the perfect getaway. Get in touch with our travel experts today.
                </p>
                <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
                  Plan Your Trip
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
