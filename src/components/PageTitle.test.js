import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import PageTitle from './PageTitle';

describe('Page Title Component', () => {
  it('inserts text in h2', () => {
    const { getByTestId } = render(<PageTitle title="Test Title" />);
    expect(getByTestId('h2tag')).toHaveTextContent('Test Title');
  });
});
