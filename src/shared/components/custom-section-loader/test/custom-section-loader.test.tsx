import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomSectionItemLoader } from '@/components/custom-section-item-loader';

import { CustomSectionLoader } from '../';

describe('CustomSectionLoader', () => {
  it('renders component without error', () => {
    const screen = render(<CustomSectionLoader SectionItemLoader={CustomSectionItemLoader} />);
    expect(screen).toMatchSnapshot();
  });
});
