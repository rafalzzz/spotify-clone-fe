module.exports = {
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '@/register/(.*)$': '<rootDir>/src/features/register/$1',
    '@/login/(.*)$': '<rootDir>/src/features/login/$1',
    '@/password-reset/(.*)$': '<rootDir>/src/features/password-reset/$1',
    '@/sidebar/(.*)$': '<rootDir>/src/features/sidebar/$1',
    '@/footer/(.*)$': '<rootDir>/src/features/footer/$1',
    '@/navigation/(.*)$': '<rootDir>/src/features/navigation/$1',
    '@/landing-page/(.*)$': '<rootDir>/src/features/landing-page/$1',
    '@/favorites/(.*)$': '<rootDir>/src/features/favorites/$1',
    '@/store/(.*)$': '<rootDir>/src/store/$1',
    '@/contexts/(.*)$': '<rootDir>/src/shared/contexts/$1',
    '@/components/(.*)$': '<rootDir>/src/shared/components/$1',
    '@/server-components/(.*)$': '<rootDir>/src/shared/server-components/$1',
    '@/configs/(.*)$': '<rootDir>/src/configs/$1',
    '@/consts/(.*)$': '<rootDir>/src/shared/consts/$1',
    '@/hooks/(.*)$': '<rootDir>/src/shared/hooks/$1',
    '@/utils/(.*)$': '<rootDir>/src/shared/utils/$1',
    '@/helpers/(.*)$': '<rootDir>/src/shared/helpers/$1',
    '@/server-actions/(.*)$': '<rootDir>/src/shared/server-actions/$1',
    '@/validators/(.*)$': '<rootDir>/src/shared/validators/$1',
    '@/enums/(.*)$': '<rootDir>/src/shared/enums/$1',
    '@/interfaces/(.*)$': '<rootDir>/src/shared/interfaces/$1',
    '@/types/(.*)$': '<rootDir>/src/shared/types/$1',
    '@/shared/(.*)$': '<rootDir>/src/shared/$1',
    '@/icons/(.*)$': '<rootDir>/src/icons/$1',
    '@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '@/test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/pages/',
    '/consts/',
    '/interfaces/',
    '/types/',
    '/enums/',
    '/server-actions/',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
