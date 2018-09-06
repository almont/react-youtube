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

	toLastPosition(item) {
		const items = document.querySelectorAll('.card')
		let positionX = 0

		items.forEach(prop => {
			const itemPos = prop.getBoundingClientRect().x
			if (positionX < itemPos) {
				positionX = itemPos
			}
		})

		positionX = Math.floor((positionX + item.getBoundingClientRect().width) - 12)
		
		item.style.WebkitTransform = `translateX(${positionX}px)`
		item.style.MozTransform = `translateX(${positionX}px)`
		item.style.msTransform = `translateX(${positionX}px)`
		item.style.OTransform = `translateX(${positionX}px)`
		item.style.transform = `translateX(${positionX}px)`
		this.goLeft(item)
	}

	goLeft(item) {
		if (this.state.play) {
			const animation = anime({
				targets: item,
				translateX: {
					value: '-=5',
					duration: 50,
					easing: 'linear'
				},
				complete: (anim) => {
					const itemPos = item.getBoundingClientRect()

					if (itemPos.x < -itemPos.width) {
						this.toLastPosition(item)
					} else {
						this.goLeft(item)
					}
				}
			})

			this.setState({animation: animation})
		}
	}

	arrangeItems(items) {
		items.forEach((item, key) => {
			const positionX = ((item.getBoundingClientRect().width + 12) * key)

			item.style.WebkitTransform = `translateX(${positionX}px)`
			item.style.MozTransform = `translateX(${positionX}px)`
			item.style.msTransform = `translateX(${positionX}px)`
			item.style.OTransform = `translateX(${positionX}px)`
			item.style.transform = `translateX(${positionX}px)`
			this.goLeft(item)
		})
	}

	componentDidMount() {
		this.setState({
			items: this.props.items.props.children,
			play: true
		}, () => {
			const items = document.querySelectorAll('.card')
			this.arrangeItems(items)
		})
	}

	onMouseEnter() {
		console.log('onMouseEnter')
		this.setState({play: false})
		this.state.animation.pause;
	}

	onMouseLeave() {
		console.log('onMouseLeave')
		this.setState({play: true})
		this.state.animation.play;
	}

	render() {
		return (
			<div className="animation-container" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
				{this.state.items}
			</div>
		)
	}
}