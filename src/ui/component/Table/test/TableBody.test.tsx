import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/app/redux/store/store';

import TableBody from '../TableBody';

describe('test api', () => {
  test('get table data', () => {
    render(
      <Provider store={store}>
        <TableBody />
      </Provider>
    );
    const elband = screen.getByTestId('band');
    expect(elband).toBeInTheDocument();
    // expect(elband).toHaveTextContent('نجارة');
  });
});
