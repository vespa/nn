/* eslint-disable */
module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testURL: 'http://localhost',
  "moduleNameMapper":{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/components/**.{js,jsx}",
    "**/pages/index/**.{js,jsx}",
  ],
}
