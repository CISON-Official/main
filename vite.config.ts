import path, { resolve } from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteImagemin from 'vite-plugin-imagemin';
import fs from 'fs';
import RoutePath from "./src/routes.ts";

const dynamicRoutes = Object.values(RoutePath).filter((p) => {
  return typeof p === 'string' && p.startsWith('/');
});

// Route metadata for sitemap priority and change frequency.
// Only /news, /events, and /membership sections exist — /examinations and
// /prs were removed since those routes no longer exist in the app.
const routePriority: Record<string, number> = {
  '/': 1.0,
  '/about': 0.8,
  '/membership': 0.8,
  '/contact': 0.7,
  '/events': 0.85,
  '/news': 0.7,
};

const getRoutePriority = (route: string): number => {
  return routePriority[route] || 0.5;
};

const getChangeFrequency = (route: string): string => {
  if (route.includes('/news')) return 'weekly';
  if (route.includes('/events')) return 'monthly';
  if (route === '/') return 'daily';
  return 'monthly';
};

function generateSitemapFile(routes: string[], baseUrl: string) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  const urlSetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
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

// Sitemap Index generation — built from the sitemaps that actually exist,
// rather than a hardcoded list that can drift out of sync with closeBundle().
function generateSitemapIndex(baseUrl: string, sitemapFiles: string[]) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  const sitemapIndexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const sitemapIndexClose = '</sitemapindex>';
  const lastmod = new Date().toISOString().split('T')[0];

  const entries = sitemapFiles.map(file => `  <sitemap>
    <loc>${baseUrl}/${file}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n');

  return `${xmlHeader}${sitemapIndexOpen}${entries}\n${sitemapIndexClose}`;
}

const SITEMAP_CSS = `
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; background: #f6f8f7; color: #1f2937; }
  .container { max-width: 1100px; margin: 0 auto; padding: 32px 20px; }
  .header { text-align: center; margin-bottom: 24px; }
  .header h1 { margin: 0 0 4px; color: #14532d; }
  .header p { margin: 0; color: #6b7280; font-size: 14px; }
  .stats { display: flex; gap: 16px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap; }
  .stat-box { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px 24px; text-align: center; min-width: 150px; }
  .stat-box strong { display: block; font-size: 20px; color: #14532d; }
  .stat-box span { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.03em; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
  th, td { padding: 10px 14px; text-align: left; border-bottom: 1px solid #e5e7eb; font-size: 14px; }
  th { background: #14532d; color: #fff; font-weight: 600; }
  a { color: #14532d; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .freq, .priority { display: inline-block; padding: 2px 8px; border-radius: 4px; background: #e6f4ea; color: #14532d; font-size: 12px; }
  .sitemaps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
  .sitemap-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; }
  .sitemap-card h3 { margin: 0 0 8px; color: #14532d; font-size: 15px; }
  .sitemap-meta { font-size: 12px; color: #6b7280; margin-top: 6px; }
  .footer { text-align: center; margin-top: 24px; color: #9ca3af; font-size: 12px; }
`;

// XSL Stylesheet for main sitemaps
const SITEMAP_XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <style>${SITEMAP_CSS}</style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>XML Sitemap</h1>
                        <p>CISON - Chartered Institute of Statisticians of Nigeria</p>
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
                    <div class="footer"><p>Sitemap generated for optimal search engine crawling.</p></div>
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
                <style>${SITEMAP_CSS}</style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Sitemap Index</h1>
                        <p>CISON - Chartered Institute of Statisticians of Nigeria</p>
                    </div>
                    <div class="content">
                        <div class="sitemaps-grid">
                            <xsl:for-each select="//sitemap:sitemap">
                                <div class="sitemap-card">
                                    <h3><xsl:choose><xsl:when test="contains(sitemap:loc, 'membership')">Membership Sitemap</xsl:when><xsl:when test="contains(sitemap:loc, 'events')">Events Sitemap</xsl:when><xsl:otherwise>Pages Sitemap</xsl:otherwise></xsl:choose></h3>
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

        const baseUrl = process.env.VITE_SITE_URL || 'https://cison.org.ng';

        // Only membership and events are distinct sitemap categories now.
        // /news lives alongside general pages in sitemap-pages.xml.
        const membershipRoutes = dynamicRoutes.filter(r => r.includes('/membership'));
        const eventsRoutes = dynamicRoutes.filter(r => r.includes('/events'));
        const pageRoutes = dynamicRoutes.filter(r => !r.includes('/membership') && !r.includes('/events'));

        // Track which sitemap files actually get written, so the index
        // and robots.txt never reference a file that doesn't exist.
        const generatedSitemaps: string[] = [];

        fs.writeFileSync(
          resolve(distPath, 'sitemap-pages.xml'),
          generateSitemapFile(pageRoutes, baseUrl)
        );
        generatedSitemaps.push('sitemap-pages.xml');

        if (membershipRoutes.length > 0) {
          fs.writeFileSync(
            resolve(distPath, 'sitemap-membership.xml'),
            generateSitemapFile(membershipRoutes, baseUrl)
          );
          generatedSitemaps.push('sitemap-membership.xml');
        }

        if (eventsRoutes.length > 0) {
          fs.writeFileSync(
            resolve(distPath, 'sitemap-events.xml'),
            generateSitemapFile(eventsRoutes, baseUrl)
          );
          generatedSitemaps.push('sitemap-events.xml');
        }

        // Sitemap index — generated from the actual file list above, so it
        // can never link to a category that had zero routes.
        fs.writeFileSync(
          resolve(distPath, 'sitemap.xml'),
          generateSitemapIndex(baseUrl, generatedSitemaps)
        );

        fs.writeFileSync(resolve(distPath, 'sitemap.xsl'), SITEMAP_XSL);
        fs.writeFileSync(resolve(distPath, 'sitemap-index.xsl'), SITEMAP_INDEX_XSL);

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
${generatedSitemaps.map(file => `Sitemap: ${baseUrl}/${file}`).join('\n')}
`;
        fs.writeFileSync(resolve(distPath, 'robots.txt'), robotsTxt);

        console.log('✅ SEO Assets Generated Successfully:');
        console.log('   ✓ sitemap.xml (index)');
        console.log('   ✓ sitemap.xsl');
        console.log('   ✓ sitemap-index.xsl');
        generatedSitemaps.forEach(file => console.log(`   ✓ ${file}`));
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