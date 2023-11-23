import { render, waitFor } from '@testing-library/react';

import { BasicLayout } from '..';

const mockedChildren = <div>Test</div>;

const renderLoveAlbumsSection = () => render(<BasicLayout>{mockedChildren}</BasicLayout>);

describe('BasicLayout', () => {
  it('render component without error', async () => {
    const { container } = renderLoveAlbumsSection();

    await waitFor(() => {
      expect(container).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });
});
