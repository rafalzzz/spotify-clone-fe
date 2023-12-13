import { MockResizeObserver } from '@/types/mock-resize-observer';

jest.mock('antd');

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
