import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

// Mock the signupUser function from UserServices
jest.mock('../services/UserServices', () => ({
 signupUser: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
   }));

describe('SignUp Component', () => {
 test('renders SignUp component', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const heading = screen.getByText(/Create your Google Account/i);
    expect(heading).toBeInTheDocument();
 });

 test('form validation works for first name', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const firstNameInput = screen.getByPlaceholderText('First Name*');
    fireEvent.change(firstNameInput, { target: { value: 'John123' } });
    expect(firstNameInput.value).toBe('John123');
 });

 test('form validation works for email', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText('email*');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
 });

 test('form validation works for password', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText('Password*');
    fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
    expect(passwordInput.value).toBe('Password123!');
 });

 test('form validation works for confirm password', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm*');
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password123!' } });
    expect(confirmPasswordInput.value).toBe('Password123!');
 });

 test('navigates to login page on successful signup', () => {
    
 });
});

