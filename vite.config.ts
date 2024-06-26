import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsConfigFilePath: 'tsconfig.build.json',
      outputDir: 'dist',
      insertTypesEntry: true
    })
  ],
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
  },
});
