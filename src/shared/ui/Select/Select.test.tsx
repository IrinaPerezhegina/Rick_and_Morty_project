import { render, screen } from '@testing-library/react';

import { Select } from './Select';

describe('Select', () => {
  test('big select size', () => {
    render(
      <Select
        onChange={() => {}}
        value=''
        view='big'
      />
    );
    const selectElement = screen.getByRole('select');
    expect(selectElement).toHaveClass('select_big');
  });

  test('small select size', () => {
    render(
      <Select
        onChange={() => {}}
        value=''
        view='small'
      />
    );
    const selectElement = screen.getByRole('select');
    expect(selectElement).toHaveClass('select_small');
  });

  test('location of the placeholder', () => {
    render(
      <Select
        onChange={() => {}}
        value=''
        placeholder='Unknown'
        view='small'
      />
    );
    const headerWrapper = document.querySelector('.select__header-wrapper');
    expect(headerWrapper?.textContent).toBe('Unknown');
  });
  // screen.debug();
});
