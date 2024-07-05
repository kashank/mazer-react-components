import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsConfigFilePath: 'tsconfig.build.json',
      outputDir: 'dist',
      insertTypesEntry: true
    }),
    cssInjectedByJsPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/mazer/assets/static/js/components/sidebar.js', 
          dest: 'assets/mazer/static/js/components'
        },
        {
          src: 'src/assets/mazer/assets/extensions/perfect-scrollbar.js', 
          dest: 'assets/mazer/extensions/perfect-scrollbar'
        },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MazerReactComponents',
      fileName: (format) => `mazer-react-components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      shimMissingExports:true,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
});
