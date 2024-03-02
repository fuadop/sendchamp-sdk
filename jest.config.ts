// /** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from "jest";

const config: Config = {
  // bail: 3,
  clearMocks: true,
  cache: false,
  collectCoverage: true,
  coverageDirectory: "coverage",
  // detectLeaks: true,
  displayName: {
    name: "SendChamp",
    color: "blue",
  },
  detectOpenHandles: true,
  errorOnDeprecated: true,
  maxConcurrency: 5,
  maxWorkers: "50%",
  modulePaths: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "json",
    "node",
  ],
  openHandlesTimeout: 1000,
  preset: "ts-jest",
  // randomize: true,
  resetMocks: true,
  resetModules: true,
  reporters: ["default", ["github-actions", { silent: false }]],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  testEnvironment: "node", // 'jsdom' | 'node' | 'jsdom-sixteen' | 'node-sixteen'
  testTimeout: 30000,
  verbose: true,
  watchman: true,
  testMatch: ["**/__tests__/**/*.spec.[jt]s?(x)"],
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  // setupFilesAfterEnv: ["<rootDir>/src/config.ts"],
  setupFilesAfterEnv: ["dotenv/config", "<rootDir>/src/config.ts"],
  setupFiles: ["<rootDir>/src/config.ts"],
  globalTeardown: "<rootDir>/test-teardown.js",
};

export default config;
