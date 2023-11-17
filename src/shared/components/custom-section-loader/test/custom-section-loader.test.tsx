import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomSectionLoader } from '../';

describe('CustomSectionLoader', () => {
  it('renders component without error', () => {
    const screen = render(<CustomSectionLoader />);
    expect(screen).toMatchSnapshot();
  });
});
