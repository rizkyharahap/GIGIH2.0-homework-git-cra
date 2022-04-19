import { render } from '@testing-library/react';
import { Image } from '../../../redux/type/trackType';
import Album from './index';

const images: Image[] = [
  { url: 'http://image', width: 200, height: 200 },
  { url: 'http://image', width: 200, height: 200 },
  { url: 'http://image', width: 200, height: 200 },
];

describe('Album Item', () => {
  test('should render image with correctly url', () => {
    const { getByAltText } = render(<Album images={images} title="alt-title" />);

    const image = getByAltText('alt-title');

    expect(image).toHaveAttribute('src', 'http://image');
  });
});
