import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { packages } from '@/data/packages';
import { formatINRRange } from '@/utils/currency';
import { Clock, Star } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

export default function PackagesPage() {
  const navigate = useNavigate();

  const handleInquire = (packageTitle: string) => {
    navigate({
      to: '/contact',
      search: { package: packageTitle },
    });
  };

  return (
    <>
      <SEOHead
        title="Travel Packages"
        description="Browse our curated travel packages including Dubai Luxury Experience, Greece Island Hopping, Romantic France, Swiss Alpine Adventure, Maldives Honeymoon, and Thailand Cultural Journey. All-inclusive packages with expert planning."
        keywords="travel packages, holiday packages, dubai package, greece package, france tour, switzerland tour, maldives honeymoon, thailand tour, all inclusive packages"
      />

      <div className="py-12">
        <div className="container">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Travel Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated travel packages designed to give you the best experience at every
              destination. All packages include accommodations, guided tours, and more.
            </p>
          </header>

          {/* Packages Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article key={pkg.id}>
                <Card className="border-none shadow-soft h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                      {pkg.featured && (
                        <Badge variant="default" className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-sm mb-2">Package Includes:</h3>
                      <ul className="space-y-1">
                        {pkg.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4 border-t">
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                        <p className="text-xl font-bold text-primary">
                          {formatINRRange(pkg.priceMin, pkg.priceMax)}
                        </p>
                      </div>
                      <Button className="w-full" onClick={() => handleInquire(pkg.title)}>
                        Inquire About This Package
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
