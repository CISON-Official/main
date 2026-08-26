import { Helmet } from 'react-helmet-async';
import Logo from "@/assets/logo.png";
import type { SEOProps } from '@/data/base';
import { DEFAULT_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/constants';
import SEO_DATA from '@/data/seo';
import { useLocation } from 'react-router-dom';
import { Franklin } from '@/authors';

export default function SEO({
    title,
    description,
    canonicalUrl = '/',
    ogImage = Logo,
    article = false,
    publishedTime,
    author,
    keywords,
    noIndex = false,
    person = Franklin,
}: SEOProps) {
    const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
    const metaDescription = description ?? DEFAULT_DESCRIPTION;
    const fullUrl = `${SITE_URL}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
    const fullImage = ogImage.startsWith('http')
        ? ogImage
        : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
    const fullLogo = Logo.startsWith('http')
        ? Logo
        : `${SITE_URL}${Logo.startsWith('/') ? Logo : `/${Logo}`}`;

    const structuredData = person
        ? {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: person.name,
              jobTitle: person.jobTitle,
              image: fullImage,
              url: fullUrl,
              worksFor: {
                  '@type': 'Organization',
                  name: person.worksFor ?? SITE_TITLE,
                  url: SITE_URL,
              },
          }
        : {
              '@context': 'https://schema.org',
              '@type': article ? 'Article' : 'WebPage',
              name: fullTitle,
              headline: fullTitle,
              description: metaDescription,
              url: fullUrl,
              image: fullImage,
              mainEntityOfPage: fullUrl,
              datePublished: article && publishedTime ? publishedTime : new Date().toISOString(),
              publisher: {
                  '@type': 'Organization',
                  name: SITE_TITLE,
                  url: SITE_URL,
                  logo: {
                      '@type': 'ImageObject',
                      url: fullLogo,
                      width: 128,
                      height: 128,
                      caption: SITE_TITLE,
                      contentUrl: fullLogo,
                  },
              },
              author: article && author
                  ? { '@type': 'Person', name: author }
                  : { '@type': 'Organization', name: SITE_TITLE },
          };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content='website' />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content="en_NG" />
            <meta property="og:site_name" content={SITE_TITLE} />
            {article && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {article && author && <meta property="article:author" content={author} />}

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:creator" content="@CISON_Nigeria" />
            <meta name="twitter:site" content="@CISON_Nigeria" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google.com" />

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Site icon — always the site logo, never a per-page photo (og:image handles that) */}
            <meta name="msapplication-TileImage" content={fullLogo} />
            <link rel="apple-touch-icon" href={fullLogo} />
            <link rel="icon" href={fullLogo} />
            <meta name="theme-color" content="#8FD299" />

            <meta name="google-site-verification" content="googlef6e8f004c1043043.html" />
            <meta name="tec-api-origin" content={SITE_URL} />
            <meta name="tec-api-key" content="v1" />
            <link
                rel="alternate"
                type="text/calendar"
                title={`${SITE_TITLE} » iCal Feed`}
                href={`${SITE_URL}/events/?ical=1`}
            />
            <meta
                name="robots"
                content={
                    noIndex
                        ? 'noindex, nofollow'
                        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
                }
            />

            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            <meta name="referrer" content="strict-origin-when-cross-origin" />
        </Helmet>
    );
}

export function SEOManager() {
  const location = useLocation();
  const path = location.pathname;

  const currentSeo = SEO_DATA[path] || SEO_DATA["/"];

  return SEO({...currentSeo})
}