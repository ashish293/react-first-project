import React from "react";

const MenuCard = (props) => {
	return (
		<>
			<section className="main-card--cointainer">
				{props.menuData.map((elem) => {
					let { id, name, price, image, description, catogery } = elem;
					return (
						<>
							<div className="card-container" key={id}>
								<div className="card">
									<div className="card-body">
										<span className="card-number card-circle subtle">{id}</span>
										<div className="card-author subtle">{catogery}</div>
										<h2 className="card-title">{name}</h2>
										<span className="card-description subtle">{description}</span>
										<div className="card-read">{price}</div>
									</div>
									<img src={image} alt={name} className="card-media" />
									<span className="card-tag subtle">Order now</span>
								</div>
							</div>
						</>
					);
				})}
			</section>
		</>
	);
};

export default MenuCard;
