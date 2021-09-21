import React from "react";

const Navbar = ({ categoryList, filterItem }) => {
	return (
		<>
			<nav className="navbar">
				<div className="btn-group">
					{categoryList.map((elem) => {
						return (
							<button className="btn-group__item" onClick={() => filterItem(elem)}>
								{elem}
							</button>
						);
					})}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
