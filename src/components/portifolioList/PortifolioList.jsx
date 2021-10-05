import "./portifolioList.scss";

export default function PortifolioList({ id, title, active, setSelected }) {
	return (
		<li className={active ? "portifolioList active" : "portifolioList"}
		 onClick={() => setSelected(id)}>
			{title}
		</li>
	)
}