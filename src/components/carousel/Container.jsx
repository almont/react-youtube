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
		const items = document.querySelectorAll('.carousel-card')
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
	}

	goLeft() {
		const speed = this.state.speed
		const animation = anime({
			targets: this.state.cards,
			translateX: ('-=' + speed),
			duration: (speed * 10),
			easing: 'linear',
			complete: (anim) => {

				console.log('complete')

				anim.animatables.forEach(item => {
					const itemPos = item.target.getBoundingClientRect()

					if (itemPos.x < -itemPos.width) {
						this.toLastPosition(item.target)
					}
				})

				this.goLeft()
			}
		})

		this.setState({
			animation: animation
		})
	}

	arrangeItems(cards) {
		this.setState({
			cards: cards
		}, () => {
			cards.forEach((item, key) => {
				const positionX = ((item.getBoundingClientRect().width + 12) * key)

				item.style.WebkitTransform = `translateX(${positionX}px)`
				item.style.MozTransform = `translateX(${positionX}px)`
				item.style.msTransform = `translateX(${positionX}px)`
				item.style.OTransform = `translateX(${positionX}px)`
				item.style.transform = `translateX(${positionX}px)`
			})

			this.goLeft()
		})
	}

	componentDidMount() {
		this.setState({
			items: this.props.items.props.children,
			speed: this.props.speed,
			play: true
		}, () => {
			this.arrangeItems(document.querySelectorAll('.carousel-card'))
		})
	}

	onMouseEnter() {
		this.state.animation.pause()
	}

	onMouseLeave() {
		this.state.animation.play()
	}

	render() {
		return (
			<div className="animation-container" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
				{this.state.items}
			</div>
		)
	}
}