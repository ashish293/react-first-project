import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Resturant = () => {
	const [menuData, setMenuData] = useState(Menu);

	const filterItem = (category) => {
		if (category === "all") {
			return setMenuData(Menu);
		}
		const updatedList = Menu.filter((elem) => {
			return elem.category === category;
		});
		setMenuData(updatedList);
	};

	const categoryList = [
		...new Set(
			Menu.map((elem) => {
				return elem.category;
			})
		),
		"all",
	];
	return (
		<>
			<Navbar categoryList={categoryList} filterItem={filterItem} />
			<MenuCard menuData={menuData} />
		</>
	);
};

export default Resturant;
