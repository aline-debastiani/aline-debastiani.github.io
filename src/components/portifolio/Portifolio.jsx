import { useEffect, useState } from "react";
import PortifolioList from "../portifolioList/PortifolioList";
import "./portifolio.scss";
import {
	fundamentosPortifolio,
	frontEndPortifolio,
	backEndPortifolio,
	fullStackPortifolio,
} from "../../data";

export default function Portifolio() {
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
				setData(fundamentosPortifolio);
				break;
			case "frontEnd":
				setData(frontEndPortifolio);
				break;
			case "backEnd":
				setData(backEndPortifolio);
				break;
			case "fullStack":
				setData(fullStackPortifolio);
				break;
			default:
				setData(fundamentosPortifolio);
		}
	}, [selected])

	return (
		<div className="portifolio" id="portifolio">
			<h1>Portifolio</h1>
			<ul>
				{list.map(item => (
					<PortifolioList
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