module.exports = {
  coverageProvider: "v8",
  maxConcurrency: 5,
  maxWorkers: 5,
  roots: ["src"],
  testMatch: ["**/*.test.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  testTimeout: 60 * 1000,
  globals: {
    browserstack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      buildName: process.env.BROWSERSTACK_BUILD_NAME,
    }
  }
};
