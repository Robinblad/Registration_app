export const handleRegistrationSubmit = (
	login: string,
	email: string,
	password: string
) => {
	const requestBody = { login, email, password };

	fetch("/api/auth/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(requestBody),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Server responded with status ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log("Registration successful", data);
		})
		.catch((error) => {
			console.error("Registration failed", error);
		});
};
