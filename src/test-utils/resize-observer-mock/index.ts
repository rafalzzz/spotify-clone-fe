let lastInstance: MockResizeObser | null = null;

class MockResizeObser {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
    lastInstance = this;
  }

  mockTrigger(entries: ResizeObserverEntry[]) {
    this.callback(entries, this as unknown as MockResizeObser);
  }
}

function resetMock() {
  lastInstance = null;
}

global.ResizeObserver = MockResizeObser;

export { MockResizeObser, lastInstance, resetMock };
