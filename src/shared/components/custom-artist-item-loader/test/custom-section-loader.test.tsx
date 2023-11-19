import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomArtistItemLoader } from '../';

describe('CustomArtistItemLoader', () => {
  it('renders component without error', () => {
    const screen = render(<CustomArtistItemLoader />);
    expect(screen).toMatchSnapshot();
  });
});
