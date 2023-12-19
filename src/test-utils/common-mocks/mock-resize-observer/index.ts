let lastInstance: MockResizeObserver | null = null;

class MockResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
    lastInstance = this;
  }

  mockTrigger(entries: ResizeObserverEntry[]) {
    this.callback(entries, this as unknown as MockResizeObserver);
  }
}

function resetMock() {
  lastInstance = null;
}

global.ResizeObserver = MockResizeObserver;

export { MockResizeObserver, lastInstance, resetMock };
