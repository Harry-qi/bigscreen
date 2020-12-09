import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.HOST': 'http://192.168.0.5:8080'
  }
});
