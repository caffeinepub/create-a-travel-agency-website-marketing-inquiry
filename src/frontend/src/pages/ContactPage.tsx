import { useSearch } from '@tanstack/react-router';
import InquiryForm from '@/components/inquiry/InquiryForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import { contactInfo } from '@/data/contact';

export default function ContactPage() {
  const search = useSearch({ strict: false }) as { destination?: string; package?: string };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Leisureflies Travels Pvt Ltd. Corporate Office in Chandigarh and Branch Office in Panchkula. Call us for Air Ticketing, Holiday Packages, Visa Consultation, and more. Email: info@leisureflies.com"
        keywords="contact leisureflies, travel agency chandigarh contact, panchkula travel agency, air ticketing contact, holiday packages booking"
      />

      <div className="py-12">
        <div className="container">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start planning your dream vacation? Fill out the form below and our travel
              experts will get back to you within 24 hours.
            </p>
          </header>

          {/* Contact Information Section */}
          <section className="mb-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {/* Corporate Office */}
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Corporate Office</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {contactInfo.corporateOffice.address}
                      </p>
                      <div className="space-y-1">
                        {contactInfo.corporateOffice.phones.slice(0, 3).map((phone) => (
                          <p key={phone} className="text-sm text-muted-foreground">
                            {phone}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Branch Office */}
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Branch Office</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {contactInfo.branchOffice.address}
                      </p>
                      <div className="space-y-1">
                        {contactInfo.branchOffice.phones.map((phone) => (
                          <p key={phone} className="text-sm text-muted-foreground">
                            {phone}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email & Website */}
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email & Website</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {contactInfo.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contactInfo.website}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Departmental Contacts */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-center">
                Department Contacts
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {contactInfo.departments.map((dept) => (
                  <Card key={dept.name} className="border-none shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{dept.name}</h3>
                          <div className="space-y-0.5">
                            {dept.phones.map((phone) => (
                              <p key={phone} className="text-xs text-muted-foreground">
                                {phone}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Inquiry Form */}
          <section className="max-w-2xl mx-auto">
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold mb-6 text-center">
                  Send Us an Inquiry
                </h2>
                <InquiryForm
                  prefillDestination={search.destination}
                  prefillPackage={search.package}
                />
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
