import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  rootDir: '../',
  modulePaths: ['<rootDir>src'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>src/$1',
    '\\.svg': '<rootDir>config/jestEmptyComponent.tsx',
    '\\.css$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json'
      }
    ]
  }
};

export default config;
