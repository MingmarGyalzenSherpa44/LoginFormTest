import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom"
import LoginForm from '../../LoginForm';
import { userEvent } from '@testing-library/user-event';


describe('LoginForm', () => {
    test('renders form with username and email fields', () => {
        render(<LoginForm />);

        const usernameInput = screen.getByLabelText(/username/i);
        const emailInput = screen.getByLabelText('email');
        const submitButton = screen.getByRole('button');

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('submit the form', async () => {

        render(<LoginForm />);

        const usernameInput = screen.getByLabelText('username');
        const emailInput = screen.getByLabelText('email');

        await waitFor(() => userEvent.type(usernameInput, 'john.doe'))

        await waitFor(() => userEvent.type(emailInput, 'john.doe@example.com'))

        const submitButton = screen.getByRole('button');
        await waitFor(() => userEvent.click(submitButton))

        expect(screen.getByText('john.doe')).toBeInTheDocument()

    })






});