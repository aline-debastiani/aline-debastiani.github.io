import "./contact.scss";
import { LinkedIn, GitHub } from '@material-ui/icons'

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="left">
				<h1>Todos os direitos reservados - Aline Debastiani</h1>
			</div>
			<div className="right">
				<a href="https://www.linkedin.com/in/aline-debastiani" className="linkedin">
					<LinkedIn />
				</a>
				<a href="https://aline-debastiani.github.io/" className="github">
					<GitHub />
				</a>
			</div>
		</div>
	)
}