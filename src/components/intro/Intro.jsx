import { useEffect, useRef } from "react";
import "./intro.scss";
import { KeyboardArrowDown } from '@material-ui/icons';
import { init } from 'ityped'


export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ['Full Stack'],
	 })
	}, [])
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/AlineDebastiani.png" alt="Aline Debastiani" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Olá, eu sou</h2>
					<h1>Aline Debastiani</h1>
					<h3>Desenvolvedora <span ref={textRef}></span></h3>
				</div>
				<a href="#portfolio">
					<KeyboardArrowDown className="arrow" />
				</a>
			</div>
		</div>
	)
}