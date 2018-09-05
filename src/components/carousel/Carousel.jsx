import 'assets/scss/Carousel.scss'
import React, {Component} from 'react'
import Container from 'components/carousel/Container'
import CardMedia from '@material-ui/core/CardMedia'
import anime from 'animejs'


export default class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.setState({
			container: document.querySelector('.carousel-container')
		})
	}

	carouselItems() {
		const container = document.querySelector('.carousel-container')
		const containerPosition = container.getClientRects()[0]

		return (
			<div>
				<CardMedia
					key="1"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
				<CardMedia
					key="2"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card test"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
				<CardMedia
					key="3"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
				<CardMedia
					key="4"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
				<CardMedia
					key="5"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
				<CardMedia
					key="6"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
				<CardMedia
					key="7"
					minPos={containerPosition.x}
					maxPos={containerPosition.width}
					className="card"
					image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
					title="Metallica- Black album (Full album)"
				/>
			</div>
		)
	}

	render() {
		return (
			<div className="carousel-container">
				{this.state.container &&
					<Container container={this.state.container} items={this.carouselItems()} />
				}
			</div>
		)
	}
}

{/* <Grid container direction="row" justify="space-between" alignItems="center" spacing={8}>
	<Grid item xs={12} sm={6} md={3}>
		<CardMedia
			className="media"
			image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
			title="Metallica- Black album (Full album)"
		/>
				</Grid> */}