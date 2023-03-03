// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/lib/node';

import { handlers } from './handlers';

export const server = setupServer(...handlers);
