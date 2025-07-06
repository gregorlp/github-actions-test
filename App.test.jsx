import { render, screen } from '@testing-library/react';

test('muestra saludo inicial', () => {
  render(<App />);
  expect(screen.getByText(/Hola desde React CI/i)).toBeDefined();
});