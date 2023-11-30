import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWind,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetWind()],
  transformers: [transformerDirectives()],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['flex-center', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['flex-col-center', 'flex flex-col justify-center items-center'],
    ['text-ellipsis', 'truncate'],
  ],
  rules: [
    [
      'font-alegreya',
      {
        'font-family': 'Alegreya',
      },
    ],
  ],
  theme: {
    colors: {
      main: '#FFE400',
      secondary: '#FF9200',
    },
  },
});

