import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { destinations } from '@/data/destinations';
import { formatINR } from '@/utils/currency';
import SEOHead from '@/components/seo/SEOHead';

export default function DestinationsPage() {
  const navigate = useNavigate();

  const handleInquire = (destinationName: string) => {
    navigate({
      to: '/contact',
      search: { destination: destinationName },
    });
  };

  return (
    <>
      <SEOHead
        title="Travel Destinations"
        description="Explore our curated travel destinations including Dubai, Greece, France, Switzerland, Maldives, and Thailand. Luxury holiday packages with expert guidance from Leisureflies Travels."
        keywords="travel destinations, dubai packages, greece tours, france holidays, switzerland trips, maldives resorts, thailand tours, luxury travel"
      />

      <div className="py-12">
        <div className="container">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Explore Our Destinations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover handpicked destinations around the world, each offering unique experiences
              and unforgettable memories.
            </p>
          </header>

          {/* Destinations Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.id}>
                <Card className="border-none shadow-soft overflow-hidden h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={`${destination.name}, ${destination.country} - luxury travel destination`}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl">{destination.name}</CardTitle>
                      <Badge variant="secondary">{destination.country}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{destination.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-semibold text-sm mb-2">Highlights:</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {destination.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-1">
                            <span className="text-primary">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Starting from</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatINR(destination.startingPrice)}
                          </p>
                        </div>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => handleInquire(destination.name)}
                      >
                        Inquire Now
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
