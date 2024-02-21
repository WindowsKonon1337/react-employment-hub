import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    // Найти и изменить правило загрузки файлов, чтобы исключить SVG (если оно есть)
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Добавить правило для SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // '@svgr/webpack' превращает SVG в React компоненты
    });

    return config; // Важно вернуть модифицированный конфиг
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
