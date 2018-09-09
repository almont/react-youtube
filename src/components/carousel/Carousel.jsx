import 'assets/scss/Carousel.scss'
import React, {Component} from 'react'
import Container from 'components/carousel/Container'
import CarouselCard from 'components/carousel/CarouselCard'


export default class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		const videos = this.props.data.items.map((item, index) => {
			const data = {
				thumb: item.snippet.thumbnails.medium.url,
				title: item.snippet.title,
				channel: item.snippet.channelTitle,
				description: item.snippet.description,
				link: item.id.videoId
			}

			return <CarouselCard key={index} data={data} showDetail={this.props.showDetail} />
		})
		this.setState({
			items: videos,
			container: document.querySelector('.carousel-container')
		})
	}

	carouselItems() {
		return (
			<div>
				{this.state.items}
			</div>
		)
	}

	render() {
		return (
			<div className="carousel-container">
				{this.state.container &&
					<Container container={this.state.container} items={this.carouselItems()} speed={5} />
				}
			</div>
		)
	}
}