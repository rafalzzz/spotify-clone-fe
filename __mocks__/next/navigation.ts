const useRouter = jest.fn(() => ({
  push: jest.fn(),
  pathname: '/mock-path',
  query: {},
  asPath: '',
}));

const usePathname = jest.fn(() => '/mock-path');

module.exports = {
  useRouter,
  usePathname,
};
