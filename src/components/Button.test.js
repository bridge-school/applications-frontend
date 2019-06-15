import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Button from './Button';

afterEach(cleanup);

describe('Button Component', () => {
  it('displays correct text', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button text="Test Btn" handleClick={onClick} />
    );
    expect(getByTestId('btn')).toHaveTextContent('Test Btn');
  });

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button text="Test Btn" handleClick={onClick} />
    );

    fireEvent.click(getByTestId('btn'));
    expect(onClick).toHaveBeenCalled();
  });
});
