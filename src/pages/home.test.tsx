import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { fakeTracks } from '../../mock/data/tracks';
import { server } from '../../mock/server';
import Header from '../component/header';
import { API_URL } from '../configs/config';
import { renderWithProviders } from '../test/test-utils';
import HomePage from './home';

const preloadedState = {
  global: {
    accessToken: 'fake-access-token',
    isNavbarOpen: false,
  },
};

describe('Home Page', () => {
  test('should fetches tracks api when search and show loading', async () => {
    renderWithProviders(
      //@ts-ignore
      <BrowserRouter>
        {/* @ts-ignore */}
        <Header />
        <HomePage />
      </BrowserRouter>,
      { preloadedState },
    );

    userEvent.type(screen.getByRole('searchbox'), 'test');

    screen.getByText('Loading ...');

    const nameText = await screen.findByText(fakeTracks.items[0].name);

    expect(nameText).toBeTruthy();
  });

  it('handles error response', async () => {
    // force msw to return error response
    server.use(
      rest.get(`${API_URL}/search`, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    renderWithProviders(
      //@ts-ignore
      <BrowserRouter>
        {/* @ts-ignore */}
        <Header />
        <HomePage />
      </BrowserRouter>,

      { preloadedState },
    );

    userEvent.type(screen.getByRole('searchbox'), 'test');

    screen.getByText('Loading ...');

    const errorMessage = await screen.findByRole('heading', { name: 'Oops something wrong !' });

    expect(errorMessage).toBeTruthy();
  });
});
