import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
	const navigate = useNavigate()

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact list</span>
			</Link>
			<div className="ml-auto">
				<Link to="/Formulario">
					<button className="btn btn-primary"  >Create new contact</button>
				</Link>
			</div>
		</nav>
	);
};
