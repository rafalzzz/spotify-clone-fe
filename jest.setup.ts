import { MockResizeObserver } from '@/types/utils';

jest.mock('antd');

beforeAll(() => {
  window.HTMLMediaElement.prototype.play = jest.fn();
  window.HTMLMediaElement.prototype.pause = jest.fn();

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
    this.disconnect = jest.fn();
  }),
});
