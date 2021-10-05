import "./topbar.scss";
import { Person, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={ "topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">Aline Debastiani</a>
					<container className="itemContainer">
						<Person className="icon"/>
						<span>+55 12 99119 8639</span>
					</container>
					<container className="itemContainer">
						<Mail className="icon"/>
						<span>debastianialine@gmail.com</span>
					</container>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	)
}