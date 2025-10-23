import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = "EventHub - Discover Events",
  description = "Find amazing events near you",
  keywords = "events, concerts, festivals",
  image = "/og-image.jpg",
  url = window.location.href
}: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Set Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;