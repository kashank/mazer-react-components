import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsConfigFilePath: 'tsconfig.build.json',
      outputDir: 'dist',
      insertTypesEntry: true
    }),
    cssInjectedByJsPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
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
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
});
