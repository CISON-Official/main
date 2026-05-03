import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    canonicalUrl: string;
    ogImage?: string;
    article?: boolean;
    publishedTime?: string;
    author?: string;
}


export default function SEO({
    title,
    description,
    canonicalUrl,
    ogImage = '/logo.jpg',
    article = false,
    publishedTime,
    author,
}: SEOProps) {
    const siteTitle = 'Charatered Institute of Statisticians of Nigeria';
    const fullTitle = `${title} | ${siteTitle}`;
    const metaDescription = description ?? 'Leading regulatory body for professional standards and accreditation worldwide.';
    const siteUrl = 'https://regulatoryinstitute.org';
    const fullUrl = `${siteUrl}${canonicalUrl}`;
    const fullImage = `${siteUrl}${ogImage}`;


    const structuredData = {
        '@context': 'https://schema.org',
        '@type': article ? 'Article' : 'WebPage',
        name: fullTitle,
        description: metaDescription,
        url: fullUrl,
        image: fullImage,
        mainEntityOfPage: fullUrl,
        headline: fullTitle,
        publisher: {
            '@type': 'Organization',
            name: siteTitle,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.jpg`,
                width: 128,
                height: 128,
                caption: siteTitle,
                contentUrl: `${siteUrl}/logo.jpg`,
            },
            url: siteUrl,
        },

        datePublished: article && publishedTime ? publishedTime : new Date().toISOString(),
        author: article
            ? { '@type': 'Organization' as const, name: author ?? siteTitle }
            : { '@type': 'Person' as const, name: siteTitle },
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Chartered Institute of Statisticians of Nigeria (CISON)" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={fullImage} />

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            <meta name="msapplication-TileImage" content="/logo.jpg" />
            <link rel="apple-touch-icon" href="/logo.jpg" />
            <link rel="icon" href="/logo.jpg" sizes="192x192" />
            <link rel="icon" href="/logo.jpg" sizes="32x32" />
            <meta name="theme-color" content="#8FD299" />

            <meta name="google-site-verification" content="x3KcVwmFMgTn13o9lFRv3DcC1J7YEeLKAhj0OYoea1A" />
            <meta name="tec-api-origin" content="https://cison.org.ng" />
            <meta name="tec-api-key" content="v1" />
            <link rel="alternate" type="text/calendar" title="Chartered Institute of Statisticians of Nigeria (CISON) » iCal Feed" href="https://cison.org.ng/events/?ical=1" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Helmet>
    );
}