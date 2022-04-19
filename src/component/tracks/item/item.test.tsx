import { render } from '@testing-library/react';
import TrackItem, { TrackItemProps } from './index';
import { fakeTrackItem } from '../../../../mock/data/tracks';

const trackItem: TrackItemProps = {
  album: {
    images: fakeTrackItem.album.images,
    title: fakeTrackItem.album.name,
  },
  description: {
    artist: fakeTrackItem.artists[0].name,
    title: fakeTrackItem.name,
    year: new Date(fakeTrackItem.album.release_date).getFullYear(),
    duration: new Date(fakeTrackItem.duration_ms).toISOString().substr(14, 5),
  },
  children: null,
};

describe('Track Item', () => {
  test('should render h1 as a title', () => {
    const { getByRole } = render(<TrackItem {...trackItem} />);

    expect(getByRole('heading')).toHaveTextContent(/fake song/i);
  });

  test('should render p as a description from artist, year and duration', () => {
    const { getByText } = render(<TrackItem {...trackItem} />);

    expect(getByText(/fake song/i)).toBeInTheDocument();
    expect(getByText(/2022/i)).toBeInTheDocument();
    expect(getByText(/04:26/i)).toBeInTheDocument();
  });

  test('should render image with correctly url', () => {
    const { getByAltText } = render(<TrackItem {...trackItem} />);

    const image = getByAltText('Fake Song');

    expect(image).toHaveAttribute('src', 'https://i.fake.co/image');
  });
});
