import "./testimonials.scss";

export default function Testimonials() {
	return (
		<div className="testimonials" id="testimonials">
			<h1>Recomendações</h1>
			<div className="container">
				<div className="card">
					<div className="top">
						<img src="assets/Samantha.jpeg" alt="" className="user" />
					</div>
					<div className="center">
						Tive o prazer de trabalhar com a Aline na J&J. Faziamos parte do
						mesmo grupo na área de Sistema da Qualidade. Aline é uma profissional
						muito interessada e concentrada. Sempre colaborava muito com idéias de
						melhorias, com pensamento "fora da caixa", com foco em resolução de problema.
						Não tinha medo de expor a sua opinião e sempre disposta a aprender.
						Está sempre em busca de novos conhecimentos e agora está se aprofundando
						em uma área muito promissora.	Tenho certeza que terá muito sucesso aonde
						quer seja. Eu recomendo com certeza a Aline Debastiani. Sucesso !!!
					</div>
					<div className="bottom">
						<h3>Samantha</h3>
						<h4>Engenheira de Qualidade Sênior na Johnson & Johnson</h4>
					</div>
				</div>
			</div>
		</div>
	)
}