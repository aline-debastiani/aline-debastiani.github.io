import { useEffect, useRef } from "react";
import "./intro.scss";
import { KeyboardArrowDown } from '@material-ui/icons';
import { init } from 'ityped'


export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true, strings: ['Full Stack'], backDelay: 1500, backSpeed: 60
	 })
	}, [])
	return (
		<div className="intro" id="intro">
			<div className="left">
				<section className="imgContainer">
					<img src="assets/AlineDebastiani.png" alt="Aline Debastiani" />
				</section>
			</div>
			<div className="right">
				<section className="wrapper">
					<h2>Olá, eu sou</h2>
					<h1>Aline Debastiani</h1>
					<h3>Desenvolvedora <span ref={textRef}></span></h3>
				</section>
				<a href="#portifolio">
					<KeyboardArrowDown className="arrow" />
				</a>
			</div>
		</div>
	)
}