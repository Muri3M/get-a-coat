import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../components/Input';

describe('Input', () => {
  it('should render the input', () => {
    const { getByRole } = render(<Input />);
    expect(getByRole('textbox')).toBeTruthy();
  });
});
