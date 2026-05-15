import { Helmet } from 'react-helmet-async';
import Logo from "@/assets/logo.png"
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
    ogImage = Logo,
    article = false,
    publishedTime,
    author,
}: SEOProps) {
    const siteTitle = 'Charatered Institute of Statisticians of Nigeria';
    const fullTitle = `${title} | ${siteTitle}`;
    const metaDescription = description ?? 'Leading regulatory body for professional standards and accreditation worldwide.';
    const siteUrl = 'https://dev.cison.org.ng';
    const fullUrl = `${siteUrl}${canonicalUrl}`;
    const fullImage = `${siteUrl}${ogImage}`;


    const structuredData = {
        '@context': 'https://dev.cison.org.ng',
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
                url: `${siteUrl}/${Logo}`,
                width: 128,
                height: 128,
                caption: siteTitle,
                contentUrl: `${siteUrl}/{Logo}`,
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

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content="en_NG" />
            <meta property="og:site_name" content="CISON" />
            <meta property="og:site_name" content="Chartered Institute of Statisticians of Nigeria (CISON)" />

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
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

            <meta name="msapplication-TileImage" content={Logo} />
            <link rel="apple-touch-icon" href="/logo.jpg" />
            <link rel="icon" href={Logo} sizes="192x192" />
            <link rel="icon" href={Logo} sizes="32x32" />
            <meta name="theme-color" content="#8FD299" />

            <meta name="google-site-verification" content="googlef6e8f004c1043043.html" />
            <meta name="tec-api-origin" content="https://cison.org.ng" />
            <meta name="tec-api-key" content="v1" />
            <link rel="alternate" type="text/calendar" title="Chartered Institute of Statisticians of Nigeria (CISON) » iCal Feed" href="https://cison.org.ng/events/?ical=1" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            <meta name="referrer" content="strict-origin-when-cross-origin" />

        </Helmet>
    );
}