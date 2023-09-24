import { renderHook, act } from '@testing-library/react-hooks';

import { useLocalStorage } from '../';

const mockKey = 'testKey';
const mockDefaultValue = 'defaultValue';
const BASIC_PROPS = { key: mockKey, defaultValue: mockDefaultValue };

const renderUseLocalStorage = () => renderHook(() => useLocalStorage(BASIC_PROPS));

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should use default value when local storage is empty', () => {
    const { result } = renderUseLocalStorage();
    expect(result.current.value).toBe(mockDefaultValue);
  });

  it('should read saved value from local storage', () => {
    const mockedSavedValue = 'mockSavedValue';
    localStorage.setItem(mockKey, mockedSavedValue);

    const { result } = renderUseLocalStorage();
    expect(result.current.value).toBe(mockedSavedValue);
  });

  it('should update value and save to local storage', () => {
    const mockNewValue = 'newValue';
    const { result } = renderUseLocalStorage();

    act(() => {
      result.current.setValue(mockNewValue);
    });

    expect(result.current.value).toBe(mockNewValue);
    expect(localStorage.getItem(mockKey)).toBe(mockNewValue);
  });
});
