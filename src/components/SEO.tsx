import { Helmet } from 'react-helmet-async';
import Logo from "@/assets/logo.png";

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    article?: boolean;
    publishedTime?: string;
    author?: string;
    keywords?: string;
    noIndex?: boolean;
}

const SITE_TITLE = 'Chartered Institute of Statisticians of Nigeria (CISON)';
const SITE_URL = 'https://cison.org.ng';
const DEFAULT_DESCRIPTION =
    'Leading regulatory body for professional standards and accreditation for statisticians in Nigeria.';

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
}: SEOProps) {
    const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
    const metaDescription = description ?? DEFAULT_DESCRIPTION;
    const fullUrl = `${SITE_URL}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
    const fullImage = ogImage.startsWith('http')
        ? ogImage
        : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

    const structuredData = {
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
                url: fullImage,
                width: 128,
                height: 128,
                caption: SITE_TITLE,
                contentUrl: fullImage,
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
            <meta property="og:type" content={article ? 'article' : 'website'} />
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

            <meta name="msapplication-TileImage" content={fullImage} />
            <link rel="apple-touch-icon" href={fullImage} />
            <link rel="icon" href={fullImage} />
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