import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


export default class VideoDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {mounted: false}
	}

	componentDidMount() {
		this.setState({mounted: true, data: this.props.data[0]})
	}

	componentWillUnmount() {
		this.setState({mounted: false})
	}

	hideDetail() {
		this.props.hideDetail()
	}

	render() {

		console.log(this.state.data);

		return (
			<div>
				<Button size="small" color="primary" onClick={this.hideDetail.bind(this)}>
					VOLTAR
        </Button>
				<Typography gutterBottom variant="headline">
					{this.props.data.title}
				</Typography>
				<div>PLAYER</div>
				<Typography variant="subheading" >
					{this.props.data.channel}
				</Typography>
				<div>LIKES: {} DESLIKES: {}</div>
				<Typography variant="body2">
					{this.props.data.description}
				</Typography>
				<div>VIEWS: {this.state.data && this.state.data.statistics.viewCount}</div>
			</div>
		)
	}
}