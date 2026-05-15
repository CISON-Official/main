import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteImagemin from 'vite-plugin-imagemin';
import fs from 'fs';
import { resolve } from 'path';

// Import your routes
import RoutePath from "./src/routes.ts";

// Extract dynamic routes
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

// Enhanced sitemap generation with priority and change frequency
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
        if (!fs.existsSync(distPath)) return;

        const baseUrl = process.env.VITE_SITE_URL || 'https://dev.cison.org.ng';

        // Separate routes by category
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

User-agent: MJ12bot
Allow: /
Crawl-delay: 2

# Sitemap Declaration
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-pages.xml${examRoutes.length > 0 ? `\nSitemap: ${baseUrl}/sitemap-exams.xml` : ''}${prsRoutes.length > 0 ? `\nSitemap: ${baseUrl}/sitemap-prs.xml` : ''}
`;
        fs.writeFileSync(resolve(distPath, 'robots.txt'), robotsTxt);

        // Generate .well-known/security.txt (optional but recommended)
        const wellKnownDir = resolve(distPath, '.well-known');
        if (!fs.existsSync(wellKnownDir)) {
          fs.mkdirSync(wellKnownDir, { recursive: true });
        }

        const securityTxt = `Contact: security@cison.org.ng
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Preferred-Languages: en
`;
        fs.writeFileSync(resolve(wellKnownDir, 'security.txt'), securityTxt);

        console.log('✅ SEO Assets Generated:');
        console.log('   - sitemap.xml (index)');
        console.log('   - sitemap-pages.xml');
        if (examRoutes.length > 0) console.log('   - sitemap-exams.xml');
        if (prsRoutes.length > 0) console.log('   - sitemap-prs.xml');
        console.log('   - robots.txt');
        console.log('   - .well-known/security.txt');
        console.log(`✅ Base URL: ${baseUrl}`);
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
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs', 'ts', 'tsx'],
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
    headers: {
      // Security headers
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Performance headers
      'Cache-Control': 'public, max-age=31536000, immutable',
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