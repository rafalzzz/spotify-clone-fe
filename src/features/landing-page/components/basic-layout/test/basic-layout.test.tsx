import { render, waitFor } from '@testing-library/react';

import { BasicLayout } from '..';

describe('BasicLayout', () => {
  it('render component without error', async () => {
    const { container } = render(
      <BasicLayout>
        <div>Test</div>
      </BasicLayout>,
    );

    await waitFor(() => {
      expect(container).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });
});
