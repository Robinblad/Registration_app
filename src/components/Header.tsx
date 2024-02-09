import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
	return (
		<>
			<div className="header">
				<div className="headerLogo">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						alt="Flowbite Logo"
						className="w-24 h-24"
						style={{ width: "32px", height: "40px" }}
					/>
					<h2 className="headerLabelName">Flowbite</h2>
				</div>
				<div className="home">Home</div>
				<div className="nav">
					<Link to="/auth" className="nav-item">
						Log in
					</Link>
					<Link to="/auth" className="nav-item">
						Registration
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
