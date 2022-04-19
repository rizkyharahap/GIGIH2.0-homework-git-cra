import { render } from '@testing-library/react';
import { fakeTracks } from '../../../mock/data/tracks';
import Tracks from './index';

describe('Track Item', () => {
  test('should render loading when isLoading true', () => {
    const { getByRole } = render(
      <Tracks data={fakeTracks} onSongSelected={() => {}} isLoading selectedSong={[]} />,
    );

    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  test('should render error message when have error', () => {
    const { getByRole, getByText } = render(
      <Tracks
        data={fakeTracks}
        onSongSelected={() => {}}
        selectedSong={[]}
        error={{
          message: 'error message',
          description: 'error description',
        }}
      />,
    );

    expect(getByRole('heading')).toHaveTextContent(/error message/);
    expect(getByText('error description')).toBeInTheDocument();
  });

  test('should render empty message when have item is empty', () => {
    const { getByRole, getByText } = render(
      <Tracks data={{ ...fakeTracks, items: [] }} onSongSelected={() => {}} selectedSong={[]} />,
    );

    expect(getByRole('heading')).toHaveTextContent(/No Results found/);
    expect(
      getByText(
        'Please make sure your words are spelled correctly or use less or different keywords',
      ),
    ).toBeInTheDocument();
  });

  test('should render corectly', async () => {
    const { findByText } = render(
      <Tracks data={fakeTracks} onSongSelected={() => {}} selectedSong={[]} />,
    );

    const nameText = await findByText(fakeTracks.items[0].name);

    expect(nameText).toBeTruthy();
  });
});
