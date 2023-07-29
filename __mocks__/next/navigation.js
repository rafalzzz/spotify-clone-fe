const useRouter = jest.fn();
const router = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
};

useRouter.mockImplementation(() => router);

module.exports = {
  useRouter,
};
