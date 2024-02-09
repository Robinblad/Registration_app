import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RegistrationForm from "./pages/auth/auth";

test("button should be disabled when the form is invalid", () => {
	render(<RegistrationForm onSubmit={() => {}} />);

	const signInButton = screen.getByRole("button", { name: /sign in/i });

	expect(signInButton).toBeDisabled();

	fireEvent.change(screen.getByPlaceholderText("login"), {
		target: { value: "user" },
	});
	fireEvent.change(screen.getByPlaceholderText("email"), {
		target: { value: "user@" },
	});
	fireEvent.change(screen.getByPlaceholderText("password"), {
		target: { value: "pass" },
	});

	expect(signInButton).toBeDisabled();

	fireEvent.change(screen.getByPlaceholderText("email"), {
		target: { value: "user@example.com" },
	});
	fireEvent.change(screen.getByPlaceholderText("password"), {
		target: { value: "password123" },
	});

	expect(signInButton).toBeEnabled();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//import React from "react";
//import { render, screen, fireEvent } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
//import RegistrationForm from "./pages/auth/auth"; // Adjust the import path as necessary

//jest.mock("simple-react-validator", () => {
//	return function () {
//		return {
//			message: jest.fn((field, value) => {
//				if (!value) {
//					return `The ${field} field is required.`;
//				}
//				return "";
//			}),
//			allValid: jest.fn(() => true),
//			showMessages: jest.fn(),
//			errorMessages: {},
//			showMessageFor: jest.fn(),
//		};
//	};
//});

//describe("RegistrationForm", () => {
//	it("validates that login field is required and clears error after input", () => {
//		render(<RegistrationForm onSubmit={() => {}} />);

//		const loginInput = screen.getByPlaceholderText("login");
//		fireEvent.blur(loginInput);

//		expect(screen.getByText("The login field is required")).toBeInTheDocument();

//		userEvent.type(loginInput, "testuser");

//		expect(
//			screen.queryByText("The login field is required")
//		).not.toBeInTheDocument();
//	});

//	it("checks that all fields are valid and button disabled state changes accordingly", () => {
//		const { container } = render(<RegistrationForm onSubmit={() => {}} />);
//		const button = container.querySelector('button[type="submit"]');

//		expect(button).toBeDisabled();

//		userEvent.type(screen.getByPlaceholderText("login"), "testuser");
//		userEvent.type(
//			screen.getByPlaceholderText("email"),
//			"testuser@example.com"
//		);
//		userEvent.type(screen.getByPlaceholderText("password"), "password123");

//		expect(button).not.toBeDisabled();
//	});
//});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//import React from "react";
//import { render, screen, fireEvent, waitFor } from "@testing-library/react";
//import RegistrationForm from "./pages/auth/auth";

//it("shows a validation error for login when it is blurred without a value", async () => {
//	render(<RegistrationForm onSubmit={() => {}} />);

//	const loginInput = screen.getByPlaceholderText("login");
//	fireEvent.blur(loginInput);

//	await waitFor(() => {
//		expect(
//			screen.queryByText("The login field is required.")
//		).toBeInTheDocument();
//	});

//	fireEvent.change(loginInput, { target: { value: "username" } });
//	fireEvent.blur(loginInput);

//	await waitFor(() => {
//		expect(
//			screen.queryByText("The login field is required.")
//		).toBeInTheDocument();
//	});
//});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//import React from "react";
//import { render, screen, fireEvent, waitFor } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
//import RegistrationForm from "./pages/auth/auth";

//it("shows a validation error for login when it is blurred without a value", async () => {
//	render(<RegistrationForm onSubmit={() => {}} />);

//	const loginInput = screen.getByPlaceholderText("login");
//	fireEvent.blur(loginInput);

//	const errorMessage = await screen.findByText("The login field is required.");
//	expect(errorMessage).toBeInTheDocument();

//	expect(
//		screen.getByText((_, node: Element | null) => {
//			const hasText = (node: Element) =>
//				node.textContent === "The login field is required.";

//			const nodeHasText = !!node && hasText(node);

//			const childrenDontHaveText = Array.from(node?.children || []).every(
//				(child) => !hasText(child as Element)
//			);

//			return nodeHasText && childrenDontHaveText;
//		})
//	).toBeInTheDocument();

//	fireEvent.change(loginInput, { target: { value: "username" } });
//	fireEvent.blur(loginInput);

//	await waitFor(() => {
//		expect(
//			screen.getByText("The login field is required.")
//		).toBeInTheDocument();
//	});
//});
