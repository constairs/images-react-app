import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Item extends Component {

	handleItemUnmount() {
		this.props.onDelete(this.props.index)
	}

	render() {
		const { image } = this.props
		return (
			<li className="images-grid-item my-bg-image-el">
				<img src={image.image_url} alt={image.title} />
				<div className="item-title">{image.title}</div>
				<span className="delete-btn" onClick={this.handleItemUnmount.bind(this)}>x</span>
			</li>
		)
	}
}