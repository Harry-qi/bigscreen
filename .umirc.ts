import { defineConfig } from 'umi';

export default defineConfig({
  title: '大屏展示',
  define: {
    'process.env.HOST': 'http://localhost:8080',
    'fastRefresh': {},
  },
  // 配置 external
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'echarts': 'echarts',
    '@alicloud/cloud-charts':'CloudCharts',
  },
  // 引入被 external 库的 scripts
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/echarts/5.0.0-beta.2/echarts.min.js',
    'https://cdn.jsdelivr.net/npm/@alicloud/cloud-charts@0.1.8/build/index.min.js'
  ],
  chainWebpack(config) {
    config.optimization.splitChunks({
      chunks: 'all',
      name: true,
      minSize: 30000,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
          priority: -10,
          enforce: true,
        },
        // 'alicloud': {
        //   name: 'alicloud',
        //   test: /[\\/]node_modules[\\/](@alicloud)[\\/]/,
        //   priority: 1,
        //   enforce: true,
        // },
        // 'g2': {
        //   name: 'g2',
        //   test: /[\\/]node_modules[\\/]@alicloud[\\/]cloud-charts[\\/]node_modules[\\/]@antv[\\/](g2)[\\/]/,
        //   priority: 2,
        //   enforce: true,
        // },
        // '@antv': {
        //   name: '@antv',
        //   test: /[\\/]node_modules[\\/](@antv)[\\/]/,
        //   priority: -11,
        //   enforce: true,
        // },
      }
    })
  },
  chunks: ['vendors', 'umi'],
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
