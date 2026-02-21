import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'LEISUREFLIES TRAVELS PRIVATE LIMITED',
      alternateName: 'Leisureflies Travels Pvt Ltd',
      url: 'https://www.leisureflies.com',
      logo: `${window.location.origin}/assets/generated/travel-logo.dim_512x512.png`,
      description: 'Full service travel management company providing Travel and Destination Management Related Services. IATA-accredited and TAAI-certified.',
      foundingDate: '2010',
      founder: {
        '@type': 'Person',
        name: 'Mr. Kamal Rana',
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'SCO 70, Second Floor, Sector 38-C',
          addressLocality: 'Chandigarh',
          addressCountry: 'IN',
          name: 'Corporate Office',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'SCO 15, Second Floor, Sector 10',
          addressLocality: 'Panchkula',
          postalCode: '134109',
          addressCountry: 'IN',
          name: 'Branch Office',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-172-4620087',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-7837230087',
          contactType: 'Air Ticketing',
          areaServed: 'IN',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-7837270087',
          contactType: 'Holiday Packages',
          areaServed: 'IN',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-7743006974',
          contactType: 'Visa Consultation',
          areaServed: 'IN',
        },
      ],
      email: 'info@leisureflies.com',
      sameAs: ['https://www.leisureflies.com'],
      priceRange: '₹₹',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '53000',
      },
    };

    // Remove existing script if present
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
