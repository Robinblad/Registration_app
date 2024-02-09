import express from "express";

const router = express.Router();

interface RegistrationFormProps {
	login: string;
	email: string;
	password: string;
}
router.post("/api/auth/register", (req, res) => {
	const { login, email, password } = req.body as RegistrationFormProps;
	// Here you would normally include registration logic
	res.status(200).json({ login, email, password });
});

export default router;
