/** @type {import('@jest/types/build/Config').InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  collectCoverage: true,
  errorOnDeprecated: true,
  testEnvironment: 'node',
};