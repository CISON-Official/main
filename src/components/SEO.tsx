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
    ogImage = '/og-default.jpg',
    article = false,
    publishedTime,
    author,
}: SEOProps) {
    const siteTitle = 'Regulatory Institute of Excellence';
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
                url: `${siteUrl}/logo.png`,
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

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={fullImage} />

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}