import { MockResizeObserver } from '@/interfaces/mock-resize-observer';

jest.mock('antd');

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(function (this: MockResizeObserver) {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
  }),
});
