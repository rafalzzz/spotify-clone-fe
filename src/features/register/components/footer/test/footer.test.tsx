import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { Footer } from '../';

describe('Footer', () => {
  it('render component without error', async () => {
    const screen = render(<Footer />);
    expect(screen).toMatchSnapshot();
  });
});
