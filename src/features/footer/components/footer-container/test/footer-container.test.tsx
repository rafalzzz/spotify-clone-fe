import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FooterContainer from '../';

describe('FooterContainer', () => {
  it('renders component without error', async () => {
    await act(async () => {
      const screen = render(<FooterContainer />);
      expect(screen).toMatchSnapshot();
    });
  });
});
