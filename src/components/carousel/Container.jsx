import 'assets/scss/Carousel.scss'
import React, {Component} from 'react'
import anime from 'animejs'


export default class Container extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		// Construir um carrossel responsivo no footer abaixo da paginação, que deve exibir os vídeos apresentados na lista e obedecer os seguintes requisitos:
		// Receber parâmetro de quantidade de quadros a serem exibidos e tempo de animação;
		// Pausar animação no "mouse hover";
		// Animação infinita(não deixar espaços vazios na exibição);
		// Deve ter função de reload vinculada com a paginação;
		// Deve ter status null(resposta de busca vazia).
	}

	componentDidMount() {
		// console.log('props', this.props.data)

		const items = document.querySelectorAll('.card')
		items.forEach((item, key) => {
			this.animate(item)
		})

		// const item = document.querySelector('.test')
		// this.animate(item)
	}
	
	animate(item) {
		const itemPosition = item.getClientRects()[0]

		let duration = ((item.attributes.minpos.value - itemPosition.x) - itemPosition.width)
		duration = ((duration * 10) * -1)
		
		console.log(duration)
		console.log('---')

		const keyframes = anime({
			targets: item,
			translateX: [
				{value: ((item.attributes.minpos.value - itemPosition.x) - itemPosition.width), duration: duration, easing: 'linear'},
				{value: (item.attributes.maxpos.value - itemPosition.width), duration: 0, easing: 'linear'},
				{value: 0, duration: duration, easing: 'linear'}
			],
			loop: true
		})

		this.setState({
			animePause: keyframes.pause,
			animePlay: keyframes.play
		})
	}

	onMouseEnter() {
		this.state.animePause();
	}

	onMouseLeave() {
		this.state.animePlay();
	}

	render() {
		return (
			<div onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
				{this.props.items && this.props.items}
			</div>
		)
	}
}