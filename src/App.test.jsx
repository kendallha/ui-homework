import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    const headerText = screen.getByText('Table');
    expect(headerText).toBeInTheDocument();
  });
});
