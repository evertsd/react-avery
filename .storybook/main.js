// .storybook/main.js

module.exports = {
    addons: ['@storybook/addon-essentials'],
    babel: async (options) => ({
      // Update your babel configuration here
      ...options,
    }),
    core: {
        builder: 'webpack5'
    },
    framework: '@storybook/react',
    stories: ['../stories/**/*.stories.@(js|mdx)'],
    webpackFinal: async (config, { configType }) => {
      // Make whatever fine-grained changes you need
      // Return the altered config
      return config;
    },
  };