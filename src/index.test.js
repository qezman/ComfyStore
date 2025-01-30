import { render, screen } from '@testing-library/react';
import Index from './index';

test('renders hello world text', () => {
	render(<Index />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});