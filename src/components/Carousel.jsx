import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'


export default class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Grid container direction="row" justify="space-between" alignItems="center" spacing={8}>
				<Grid item xs={12} sm={6} md={3}>
					<CardMedia
						className="media"
						image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
						title="Metallica- Black album (Full album)"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<CardMedia
						className="media"
						image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
						title="Metallica- Black album (Full album)"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<CardMedia
						className="media"
						image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
						title="Metallica- Black album (Full album)"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<CardMedia
						className="media"
						image="https://i.ytimg.com/vi/DqDeH3hwxfw/mqdefault.jpg"
						title="Metallica- Black album (Full album)"
					/>
				</Grid>
			</Grid>
		)
	}
}