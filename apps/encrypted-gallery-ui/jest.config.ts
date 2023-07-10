module.exports = {
  displayName: 'encrypted-gallery-ui',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\.vue$': '@vue/vue2-jest',
    '.+\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ["ts", "tsx", "vue", "js", "json"],
  coverageDirectory: '../../coverage/apps/encrypted-gallery-ui',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/encrypted-gallery-ui/tsconfig.spec.json',
      babelConfig: 'apps/encrypted-gallery-ui/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/encrypted-gallery-ui/tsconfig.spec.json',
      babelConfig: 'apps/encrypted-gallery-ui/babel.config.js',
    },
  },
};
