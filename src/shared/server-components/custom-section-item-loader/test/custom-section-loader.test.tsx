import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomSectionItemLoader } from '../';

describe('CustomSectionItemLoader', () => {
  it('renders component without error', () => {
    const screen = render(<CustomSectionItemLoader />);
    expect(screen).toMatchSnapshot();
  });
});
