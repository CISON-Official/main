import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({ webp: { quality: 80 } }),
    Sitemap({
      hostname: 'https://dev.cison.org.ng',
      dynamicRoutes: ['/membership', '/journal', '/accreditation'],
    }),
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
        manualChunks: (moduleId, _) => {
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
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', ],
  },
  oxc: {
    jsx: {
      runtime: 'classic',
      pragma: 'h',
      pragmaFrag: 'Fragment',
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
