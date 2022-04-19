import { rest } from 'msw';
import { API_URL } from '../../src/configs/config';
import { fakeTracks } from '../data/tracks';

const handlers = [
  rest.get(`${API_URL}/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ tracks: fakeTracks }));
  }),
  rest.get(`${API_URL}/me`, (req, res, ctx) => {
    return res(ctx.json(fakeTracks));
  }),
];

export { handlers };
