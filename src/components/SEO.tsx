
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  featuredImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Handyman Wannabe - Professional Handyman Services',
  description = 'Handyman Wannabe provides professional and reliable handyman services for all your home maintenance and improvement needs.',
  keywords = 'handyman, home repair, home maintenance, professional handyman, home improvement',
  ogImage = '/images/Handyman-Hero.jpeg',
  featuredImage = '/images/Handyman-Hero.jpeg',
  ogUrl,
  canonicalUrl,
}) => {
  const siteUrl = 'https://www.handymanwannabe.com';
  
  // Clean URL - remove any query parameters
  const cleanUrl = () => {
    const currentUrl = window.location.href;
    const urlWithoutParams = currentUrl.split('?')[0];
    return urlWithoutParams;
  };
  
  // Use provided canonical URL, or generate a clean one
  const pageUrl = canonicalUrl || cleanUrl();
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const featuredImageUrl = featuredImage.startsWith('http') ? featuredImage : `${siteUrl}${featuredImage}`;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL - always present and always clean */}
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Featured Image */}
      <link rel="image_src" href={featuredImageUrl} />
    </Helmet>
  );
};

export default SEO;
