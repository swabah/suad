import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginModal from '../components/LoginModal';
// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('modal shows the children and a close button', async () => {
	const { user } = setupUserEvent(<LoginModal />);

	expect(
		screen.getByText(/What project are you looking for?/i)
	).toBeInTheDocument();

	const closeModal = screen.getByText(/Close/i);
	expect(closeModal).toBeInTheDocument();

	const closeModalButton = closeModal.parentElement;
	expect(closeModalButton).toBeInTheDocument();
});
