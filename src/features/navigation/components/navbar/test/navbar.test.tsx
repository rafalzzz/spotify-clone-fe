import { render, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from '../';

describe('Navbar', () => {
  it('render component without error', async () => {
    const { container } = render(<Navbar />);

    await waitFor(() => {
      expect(container).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });
});
