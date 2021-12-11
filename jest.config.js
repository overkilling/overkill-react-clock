module.exports = {
  roots: ['./src'],
  setupFilesAfterEnv: ['./test-utils/setup.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom'
}
