import React from 'react';
import { cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { StudentView } from './StudentView';
import { renderWithRedux } from '../testUtils/';

afterEach(cleanup);

describe('StudentView Component', () => {
  it('can render with redux with defaults', () => {
    const testProps = {
      error: null,
      currentCohorts: [],
      loading: false,
      getCurrentCohorts: jest.fn(),
    };

    const { getByTestId } = renderWithRedux(<StudentView {...testProps} />);
    expect(getByTestId('header')).toHaveTextContent('Cohort Application Forms');
  });

  it('will have error text if there is an error', () => {
    const testProps = {
      error: { message: 'Failed to fetch' },
      currentCohorts: [],
      loading: false,
      getCurrentCohorts: jest.fn(),
    };

    const { getByText } = renderWithRedux(<StudentView {...testProps} />);
    expect(getByText('Error!')).toBeInTheDocument();
  });

  it('will have "loading" text if it is loading', () => {
    const testProps = {
      error: null,
      currentCohorts: [],
      loading: true,
      getCurrentCohorts: jest.fn(),
    };

    const { getByText } = renderWithRedux(<StudentView {...testProps} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
