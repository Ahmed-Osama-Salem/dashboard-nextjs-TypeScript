// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export const handlers = [
  rest.get(
    ' https://outrageous-pocketbook-ant.cyclic.app/read',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: 'ahmed',
          },
        ])
      );
    }
  ),
];
