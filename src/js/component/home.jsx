import React from "react";
import Caja from "./Caja.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	return (
		<div className="container row">
			<h5>Alvaro Todo List with counter</h5>
			<Caja />
		</div>
	);
};
export default Home;
