import unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vitePluginRequireTransform from 'vite-plugin-require-transform';

import Pages from 'vite-plugin-pages';
import svgLoader from 'vite-svg-loader';

import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';
import topLevelAwait from 'vite-plugin-top-level-await';

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [
      vue(),
      Pages(),
      svgLoader(),
      basicSsl(),
      unocss(),
      topLevelAwait(),
      vitePluginRequireTransform({
        fileRegex: /.ts$|.vue$/,
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: 'src/components.d.ts',
        deep: true,
        resolvers: [
          AntDesignVueResolver({
            importStyle: true,
          }),
        ],
      }),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'src/auto-imports.d.ts',
        resolvers: [AntDesignVueResolver()],
      }),
      nodePolyfills({
        // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
        include: ['path'],
        // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
        exclude: [
          'http', // Excludes the polyfill for `http` and `node:http`.
        ],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Override the default polyfills for specific modules.
        overrides: {
          // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
          fs: 'memfs',
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 9900,
      https: true,
    },
    define: Object.assign(processEnvValues, {}),

    resolve: {
      // alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        stream: 'vite-compatible-readable-stream',
      },
    },
    build: {
      target: ['es2020'],
      rollupOptions: {
        plugins: [rollupNodePolyFill({})],
        output: {
          manualChunks: {
            pinia: ['pinia'],
            vue: ['vue', 'vue-router'],
            '@fortawesome': [
              '@fortawesome/fontawesome-svg-core',
              '@fortawesome/free-brands-svg-icons',
              '@fortawesome/free-regular-svg-icons',
              '@fortawesome/free-solid-svg-icons',
              '@fortawesome/vue-fontawesome',
            ],
            '@ant-design': ['ant-design-vue'],
            '@vueuse': ['@vueuse/core'],
            'lodash-es': ['lodash-es'],
          },
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020',

        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
  };
});

