import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteImagemin from 'vite-plugin-imagemin';
import fs from 'fs';
import { resolve } from 'path';
import RoutePath from "./src/routes.ts";

const dynamicRoutes = Object.values(RoutePath).filter((path) => {
  return typeof path === 'string' && path.startsWith('/');
});

// Route metadata for sitemap priority and change frequency
const routePriority: Record<string, number> = {
  '/': 1.0,
  '/about': 0.8,
  '/membership': 0.8,
  '/contact': 0.7,
  '/examinations': 0.9,
  '/prs': 0.85,
  '/blog': 0.7,
};

const getRoutePriority = (route: string): number => {
  return routePriority[route] || 0.5;
};

const getChangeFrequency = (route: string): string => {
  if (route.includes('/examinations')) return 'weekly';
  if (route.includes('/prs')) return 'monthly';
  if (route === '/') return 'daily';
  return 'monthly';
};

function generateSitemapFile(_: string, routes: string[], baseUrl: string) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  const urlSetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  const urlSetClose = '</urlset>';

  const urls = routes.map(route => {
    const priority = getRoutePriority(route);
    const changeFrequency = getChangeFrequency(route);
    const lastmod = new Date().toISOString().split('T')[0];

    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `${xmlHeader}${urlSetOpen}${urls}\n${urlSetClose}`;
}

// Sitemap Index generation
function generateSitemapIndex(baseUrl: string) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  const sitemapIndexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const sitemapIndexClose = '</sitemapindex>';
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemaps = [
    { url: '/sitemap-pages.xml', name: 'Pages' },
    { url: '/sitemap-exams.xml', name: 'Examinations' },
    { url: '/sitemap-prs.xml', name: 'PRS' },
  ];

  const entries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}${sitemap.url}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n');

  return `${xmlHeader}${sitemapIndexOpen}${entries}\n${sitemapIndexClose}`;
}

// XSL Stylesheet for main sitemaps
const SITEMAP_XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>XML Sitemap</h1>
                        <p>CISON - Charactered Institute of Statisticians of Nigeria</p>
                    </div>
                    <div class="content">
                        <div class="stats">
                            <div class="stat-box"><strong><xsl:value-of select="count(//sitemap:url)"/></strong><span>Total URLs Indexed</span></div>
                            <div class="stat-box"><strong><xsl:value-of select="substring(//sitemap:url[1]/sitemap:lastmod, 1, 10)"/></strong><span>Last Updated</span></div>
                            <div class="stat-box"><strong>Professional</strong><span>SEO Optimized</span></div>
                        </div>
                        <table>
                            <thead><tr><th style="width: 50%">URL</th><th style="width: 15%">Updated</th><th style="width: 15%">Frequency</th><th style="width: 20%">Priority</th></tr></thead>
                            <tbody>
                                <xsl:for-each select="//sitemap:url">
                                    <tr><td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td><td><xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></td><td><span class="freq"><xsl:value-of select="sitemap:changefreq"/></span></td><td><span class="priority"><xsl:value-of select="sitemap:priority"/></span></td></tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                    <div class="footer"><p>🤖 Sitemap generated for optimal search engine crawling.</p></div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>`;

// XSL Stylesheet for sitemap index
const SITEMAP_INDEX_XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>Sitemap Index</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Sitemap Index</h1>
                        <p>CISON - Charactered Institute of Statisticians of Nigeria</p>
                    </div>
                    <div class="content">
                        <div class="sitemaps-grid">
                            <xsl:for-each select="//sitemap:sitemap">
                                <div class="sitemap-card">
                                    <h3><xsl:choose><xsl:when test="contains(sitemap:loc, 'exams')">Examinations Sitemap</xsl:when><xsl:when test="contains(sitemap:loc, 'prs')">PRS Sitemap</xsl:when><xsl:otherwise>Pages Sitemap</xsl:otherwise></xsl:choose></h3>
                                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                                    <div class="sitemap-meta">Last updated: <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></div>
                                </div>
                            </xsl:for-each>
                        </div>
                    </div>
                    <div class="footer"><p>Sitemap Index for optimal search engine crawling.</p></div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>`;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      webp: { quality: 80 },
      // jpeg: { quality: 80 },
      optipng: { bitDepthReduction: true, colorTypeReduction: true },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.5, 0.6] },
      gifsicle: { optimizationLevel: 3 },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
    }),
    {
      name: 'cison-seo-optimizer',
      closeBundle() {
        const distPath = resolve(__dirname, 'dist');
        if (!fs.existsSync(distPath)) {
          console.log('❌ dist folder not found');
          return;
        }

        const baseUrl = process.env.VITE_SITE_URL || 'https://dev.cison.org.ng';

        const examRoutes = dynamicRoutes.filter(r => r.includes('/examinations'));
        const prsRoutes = dynamicRoutes.filter(r => r.includes('/prs'));
        const pageRoutes = dynamicRoutes.filter(r => !r.includes('/examinations') && !r.includes('/prs'));

        // Generate categorized sitemaps
        fs.writeFileSync(
          resolve(distPath, 'sitemap-pages.xml'),
          generateSitemapFile('pages', pageRoutes, baseUrl)
        );

        if (examRoutes.length > 0) {
          fs.writeFileSync(
            resolve(distPath, 'sitemap-exams.xml'),
            generateSitemapFile('exams', examRoutes, baseUrl)
          );
        }

        if (prsRoutes.length > 0) {
          fs.writeFileSync(
            resolve(distPath, 'sitemap-prs.xml'),
            generateSitemapFile('prs', prsRoutes, baseUrl)
          );
        }

        // Generate sitemap index
        fs.writeFileSync(
          resolve(distPath, 'sitemap.xml'),
          generateSitemapIndex(baseUrl)
        );

        // ✅ GENERATE XSL FILES IN DIST FOLDER
        fs.writeFileSync(
          resolve(distPath, 'sitemap.xsl'),
          SITEMAP_XSL
        );

        fs.writeFileSync(
          resolve(distPath, 'sitemap-index.xsl'),
          SITEMAP_INDEX_XSL
        );

        // Generate robots.txt
        const robotsTxt = `# CISON Robots Configuration
User-agent: *
Allow: /
Allow: /sitemap.xml
Allow: /sitemap-*.xml
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.ts$

# Specific bot rules
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sitemap Declaration
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-pages.xml${examRoutes.length > 0 ? `\nSitemap: ${baseUrl}/sitemap-exams.xml` : ''}${prsRoutes.length > 0 ? `\nSitemap: ${baseUrl}/sitemap-prs.xml` : ''}
`;
        fs.writeFileSync(resolve(distPath, 'robots.txt'), robotsTxt);

        console.log('✅ SEO Assets Generated Successfully:');
        console.log('   ✓ sitemap.xml (index)');
        console.log('   ✓ sitemap.xsl');
        console.log('   ✓ sitemap-index.xsl');
        console.log('   ✓ sitemap-pages.xml');
        if (examRoutes.length > 0) console.log('   ✓ sitemap-exams.xml');
        if (prsRoutes.length > 0) console.log('   ✓ sitemap-prs.xml');
        console.log('   ✓ robots.txt');
        console.log(`\n📍 Base URL: ${baseUrl}`);
        console.log(`📊 Total routes: ${dynamicRoutes.length}`);
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    rolldownOptions: {
      output: {
        manualChunks: (moduleId) => {
          if (moduleId.includes('node_modules')) {
            return 'vendor';
          }
          return null;
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
  },
  server: {
    hmr: {
      overlay: true,
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
    ],
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});