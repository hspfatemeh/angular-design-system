module.exports = {
  preset: 'jest-preset-angular',

  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts'
  ],

  testEnvironment: 'jsdom',

  testMatch: [
    '<rootDir>/projects/**/*.spec.ts'
  ],

  moduleFileExtensions: [
    'ts',
    'html',
    'js',
    'json'
  ],

  modulePathIgnorePatterns: [
    '<rootDir>/dist/'
  ],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],

  transform: {
    '^.+\\.(ts|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/projects/farsi-ng/tsconfig.spec.json'
      }
    ]
  }
};