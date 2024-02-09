import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/auth/auth";
import { handleRegistrationSubmit } from "./routes/handleSubmit";
import Header from "./components/Header";
import "./App.scss";

function App() {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route
						path="/auth"
						element={<RegistrationForm onSubmit={handleRegistrationSubmit} />}
					/>
				</Routes>
			</>
		</Router>
	);
}

export default App;
