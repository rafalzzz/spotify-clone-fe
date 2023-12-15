import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomSectionItemImage } from '..';

const MOCKED_CHILD_CONTENT = 'Mocked Child Content';
const MOCKED_IMAGE_URL = '/some-image-url.jpg';
const MOCKED_CHILD = <div>{MOCKED_CHILD_CONTENT}</div>;

const renderCustomSectionItemImage = () =>
  render(
    <CustomSectionItemImage imageUrl={MOCKED_IMAGE_URL}>{MOCKED_CHILD}</CustomSectionItemImage>,
  );

describe('CustomSectionItemImage', () => {
  it('renders component without error', () => {
    const screen = renderCustomSectionItemImage();
    expect(screen).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const { queryByText } = renderCustomSectionItemImage();
    expect(queryByText(MOCKED_CHILD_CONTENT)).toBeInTheDocument();
  });

  it('renders the image with the correct url', () => {
    const { queryByAltText } = renderCustomSectionItemImage();
    expect(queryByAltText('image')).toHaveAttribute(
      'src',
      `/_next/image?url=%2F${MOCKED_IMAGE_URL.replace('/', '')}&w=256&q=75`,
    );
  });
});
