import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
	fundamentosPortfolio,
	frontEndPortfolio,
	backEndPortfolio,
	fullStackPortfolio,
} from "../../data";

export default function Portfolio() {
	const [selected, setSelected] = useState("fundamentos");
	const [data, setData] = useState([]);
	const list = [
		{
			id: "fundamentos",
			title: "Fundamentos Desenvolvimento Web"
		},
		{
			id: "frontEnd",
			title: "Front-End"
		},
		{
			id: "backEnd",
			title: "Back-End"
		},
		{
			id: "fullStack",
			title: "Full Stack"
		},
	];

	useEffect(() => {
		switch(selected) {
			case "fundamentos":
				setData(fundamentosPortfolio);
				break;
			case "frontEnd":
				setData(frontEndPortfolio);
				break;
			case "backEnd":
				setData(backEndPortfolio);
				break;
			case "fullStack":
				setData(fullStackPortfolio);
				break;
			default:
				setData(fundamentosPortfolio);
		}
	}, [selected])

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map(item => (
					<PortfolioList
					 title={item.title}
					 active={selected === item.id}
					 setSelected={setSelected}
					 id={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
				<a href={d.link}>
					<div className="item">
						<img src={d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				</a>
				))}
			</div>
		</div>
	)
}