import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TCustomContextMenu } from '@/types/components';

import { CustomContextMenu } from '..';

const CHILDREN_DATA_TEST_ID = 'children';

const renderCustomContextMenu = (props: Partial<TCustomContextMenu> = {}) => {
  const basicProps = {
    items: [],
    ...props,
  };

  return render(
    <CustomContextMenu {...basicProps}>
      <div data-testid={CHILDREN_DATA_TEST_ID}>Test</div>
    </CustomContextMenu>,
  );
};
describe('CustomContextMenu', () => {
  it('renders component without error', () => {
    const screen = renderCustomContextMenu();
    expect(screen).toMatchSnapshot();
  });

  it('calls onOpenChange when opened', () => {
    const handleOpenChange = jest.fn();

    const { getByTestId } = renderCustomContextMenu({ onOpenChange: handleOpenChange });

    const children = getByTestId(CHILDREN_DATA_TEST_ID);
    fireEvent.contextMenu(children);

    expect(handleOpenChange).toHaveBeenCalled();
  });

  it('renders correct number of items', () => {
    const items = [
      { key: '1', label: 'Item 1' },
      { key: '2', label: 'Item 2' },
    ];

    const { getByTestId, getAllByRole } = renderCustomContextMenu({ items });

    const children = getByTestId(CHILDREN_DATA_TEST_ID);
    fireEvent.contextMenu(children);

    expect(getAllByRole('menuitem')).toHaveLength(items.length);
  });

  it('calls handleOnClick when user click menu item', () => {
    const handleOnClick = jest.fn();

    const items = [{ key: '1', label: 'Item 1', onClick: handleOnClick }];

    const { getByTestId, getByRole } = renderCustomContextMenu({ items });

    const children = getByTestId(CHILDREN_DATA_TEST_ID);
    fireEvent.contextMenu(children);

    const menuItem = getByRole('menuitem');
    fireEvent.click(menuItem);

    expect(handleOnClick).toHaveBeenCalled();
  });
});
