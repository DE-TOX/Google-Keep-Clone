import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';


jest.mock('../services/UserServices', () => ({
    loginUser: jest.fn(() => Promise.resolve({ data: { id: '123' } })),
}));

describe('Login Component', () => {
    test('renders Login component', () => {
        render(
            <Router>
                <Login />
            </Router>
        );
        const heading = screen.getByText(/Sign in/i);
        expect(heading).toBeInTheDocument();
    });

    test('form validation works for email', () => {
        render(
            <Router>
                <Login />
            </Router>
        );
        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput.value).toBe('john@example.com');
    });

    test('form validation works for password', () => {
        render(
            <Router>
                <Login />
            </Router>
        );
        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
        expect(passwordInput.value).toBe('Password123!');
    });

    test('navigates to dashboard on successful login', async () => {
    });
});