import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/assets/generated/travel-hero.dim_1600x900.png',
  canonicalUrl,
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Leisureflies Travels Pvt Ltd`;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'Leisureflies Travels Pvt Ltd', true);
    
    const fullImageUrl = ogImage.startsWith('http') 
      ? ogImage 
      : `${window.location.origin}${ogImage}`;
    setMetaTag('og:image', fullImageUrl, true);
    setMetaTag('og:url', canonicalUrl || window.location.href, true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', fullImageUrl);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl || window.location.href;
  }, [title, description, keywords, ogType, ogImage, canonicalUrl]);

  return null;
}
