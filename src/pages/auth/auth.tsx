import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./auth.scss";

export interface RegistrationFormProps {
	onSubmit: (login: string, email: string, password: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const validator = useRef(new SimpleReactValidator()).current;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("handleSubmit called");
		validator.showMessages();
		if (validator.allValid()) {
			onSubmit(login, email, password);
		} else {
			console.log("Validation errors:", validator.errorMessages);
		}

		setLogin((login) => login);
		setEmail((email) => email);
		setPassword((password) => password);
	};

	return (
		<>
			<div className="wrapper">
				<div className="logo">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						alt="Flowbite Logo"
						className="w-24 h-24"
					/>
					<h2 className="labelName">Flowbite</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<h1 className="register">Register</h1>
					<p>Your login</p>
					<input
						type="text"
						placeholder="login"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
						onBlur={() => validator.showMessageFor("login")}
						required
					/>
					{validator.message("login", login, "required")}
					<p>Your email</p>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur={() => validator.showMessageFor("email")}
						required
					/>
					{validator.message("email", email, "required|email")}
					<p>Your password</p>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onBlur={() => validator.showMessageFor("password")}
						required
					/>
					{validator.message("password", password, "required|min:8")}

					<button type="submit" disabled={!validator.allValid()}>
						Sign in
					</button>
				</form>
			</div>
		</>
	);
};

export default RegistrationForm;
