import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Globe, Users, Shield, Building2 } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import { companyProfile } from '@/data/company';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel. Our team has explored destinations worldwide.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our success. We go above and beyond to exceed expectations.',
    },
    {
      icon: Globe,
      title: 'Comprehensive Solutions',
      description: 'End-to-end travel management from air tickets to luxury holidays.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning service recognized by industry leaders and satisfied travelers.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description={`${companyProfile.legalName} - ${companyProfile.description.substring(0, 150)}... Founded in ${companyProfile.foundingYear} by ${companyProfile.founder}. ${companyProfile.certifications.join(', ')}.`}
        keywords="about leisureflies, travel agency chandigarh, IATA certified travel agency, TAAI certified, Kamal Rana, travel management company"
      />

      <div className="py-12">
        <div className="container">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About {companyProfile.displayName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating extraordinary travel experiences since {companyProfile.foundingYear}
            </p>
          </header>

          {/* Certifications Banner */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {companyProfile.certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-lg"
              >
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <article className="max-w-4xl mx-auto mb-16">
            <Card className="border-none shadow-soft">
              <CardContent className="p-8 md:p-12">
                <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{companyProfile.description}</p>
                  <p>
                    Founded in {companyProfile.foundingYear} by {companyProfile.founder},{' '}
                    {companyProfile.legalName} was born from a vision to offer end-to-end travel
                    solutions under one roof, making travel effortless for both individuals and
                    organizations. Over the years, we've proudly served{' '}
                    {companyProfile.milestones.travelers} travelers, including families,
                    honeymooners, corporate clients, and channel partners across the globe.
                  </p>
                  <p>
                    The main strength of the company is the client and the business partners who
                    backs us with trust and encouragement which is the vital reason for us to grow
                    with flying colors. We offer the cheapest airline tickets and hotel service on
                    our "Integrated Travel Portal" with advanced purchased discounted tickets and
                    discounted return tickets on all airlines as well as LCC airlines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {companyProfile.services.map((service) => (
                <Card key={service} className="border-none shadow-soft">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm font-medium">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-none shadow-soft text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-none shadow-soft">
            <CardContent className="p-12">
              <div className="grid gap-8 md:grid-cols-4 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {companyProfile.milestones.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {companyProfile.milestones.travelers}
                  </p>
                  <p className="text-sm text-muted-foreground">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Destinations</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">2</p>
                  <p className="text-sm text-muted-foreground">Office Locations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Locations */}
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Our Locations</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Corporate Office</h3>
                      <p className="text-sm text-muted-foreground">
                        SCO 70, Second Floor
                        <br />
                        Sector 38-C, Chandigarh
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Branch Office</h3>
                      <p className="text-sm text-muted-foreground">
                        SCO 15, Second Floor
                        <br />
                        Sector 10, Panchkula 134109
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
