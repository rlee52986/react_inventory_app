import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {
  test('renders App component', async () => {
    render(<App />);

    const navHeaderText = screen.queryByText(/Taking Stock/);

    expect(navHeaderText).not.toBeNull();
  });
});

