import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProgressBar } from '../';

const handleChange = jest.fn();
const handleStartChange = jest.fn();
const handleEndChange = jest.fn();

const initialValue = 50;
const initialMinValue = 0;
const initialMaxValue = 100;

const renderProgressBar = () =>
  render(
    <ProgressBar
      value={50}
      minValue={0}
      maxValue={100}
      handleChange={handleChange}
      handleStartChange={handleStartChange}
      handleEndChange={handleEndChange}
    />,
  );

describe('<ProgressBar />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with initial props', () => {
    const { getByTestId } = renderProgressBar();
    const input = getByTestId('progress-bar');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'range');
    expect(input).toHaveAttribute('min', String(initialMinValue));
    expect(input).toHaveAttribute('max', String(initialMaxValue));
    expect(input).toHaveAttribute('value', String(initialValue));
  });

  it('calls handleChange on input change', () => {
    const { getByTestId } = renderProgressBar();

    const input = getByTestId('progress-bar');
    fireEvent.change(input, { target: { value: '60' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls handleStartChange on mouse down', () => {
    const { getByTestId } = renderProgressBar();

    const input = getByTestId('progress-bar');
    fireEvent.mouseDown(input);

    expect(handleStartChange).toHaveBeenCalledTimes(1);
  });

  it('calls handleEndChange on mouse up', () => {
    const { getByTestId } = renderProgressBar();

    const input = getByTestId('progress-bar');
    fireEvent.mouseUp(input);

    expect(handleEndChange).toHaveBeenCalledTimes(1);
  });

  it('calls handleStartChange on touch start', () => {
    const { getByTestId } = renderProgressBar();

    const input = getByTestId('progress-bar');
    fireEvent.touchStart(input);

    expect(handleStartChange).toHaveBeenCalledTimes(1);
  });

  it('calls handleEndChange on touch end', () => {
    const { getByTestId } = renderProgressBar();

    const input = getByTestId('progress-bar');
    fireEvent.touchEnd(input);

    expect(handleEndChange).toHaveBeenCalledTimes(1);
  });
});
