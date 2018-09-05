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

	goLeft(item) {
		anime({
			targets: item,
			translateX: {
				value: '-=10',
				duration: 100,
				easing: 'linear'
			},
			complete: (anim) => {

				console.log('complete')

				this.goLeft(item)
			}
		})
	}

	toLastPosition(item) {
		const items = document.querySelectorAll('.card')
		let lastX = items[items.length - 1].getBoundingClientRect().x
		const lastW = items[items.length - 1].getBoundingClientRect().width
		const margin = 6;

		items.forEach(item => {
			const itemPos = item.getBoundingClientRect()

			if (itemPos.x > lastX) {
				lastX = itemPos.x
			}
		})

		anime({
			targets: item,
			translateX: {
				value: ((lastX + (lastW * 2)) + margin),
				duration: 0,
				easing: 'linear'
			}
		})

		console.log(lastW)
	}

	checkPosition() {

		const items = document.querySelectorAll('.card')
		
		items.forEach(item => {
			const itemPos = item.getBoundingClientRect()

			console.log('itemPos', itemPos.x)
			console.log('container', this.props.container.getBoundingClientRect().x)
			console.log('---')

			if (itemPos.x < -itemPos.width) {
				console.log('zerou')
				this.toLastPosition(item)
			}

		})

		

		// const item = document.querySelector('.card')
		// const itemPos = item.getBoundingClientRect()

		// if (itemPos.x < -itemPos.width) {
		// 	console.log('zerou')
		// 	this.toLastPosition(item)
		// }

	}

	componentDidMount() {
		
		const animationContainer = document.querySelector('.animation-container')
		this.goLeft(animationContainer)


		this.setState({
			items: this.props.items.props.children
		}, () => {
			setInterval(() => {
				this.checkPosition()
			}, 1000)
		})
	}

	onMouseEnter() {
		// this.state.animePause();
	}

	onMouseLeave() {
		// this.state.animePlay();
	}

	render() {
		return (
			<div className="animation-container" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
				{this.state.items}
			</div>
		)
	}
}