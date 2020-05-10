module.exports = {
  moduleFileExtensions: [
    'ts', 'tsx', 'js',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'js-test': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>$1',
    '^@app(.*)$': '<rootDir>/app$1',
  },
  setupTestFrameworkScriptFile: 'bdd-lazy-var/global',
};
