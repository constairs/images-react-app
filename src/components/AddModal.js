import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class AddModal extends Component {

	constructor(props) {
		super(props)
		this.state = { imgUrl : '', imgTitle: '' }
	}

	handleSubmitModal() {
		const imgUrl = this.state.imgUrl
		const imgData = { imgUrl: this.state.imgUrl, imgTitle: this.state.imgTitle }
		this.props.onSubmitModal(imgData)
	}

	handleInputUrl(e) {
		this.setState({imgUrl: e.target.value})
	}

	handleInputTitle(e) {
		this.setState({ imgTitle: e.target.value })
	}

	handleCloseModal() {
		this.props.onCloseModal()
	}

	render() {
		return (
			<div className="modal-wrap">
				<div className="add-modal">
					<h3>Добавить изображение</h3>
					<span className="delete-btn" onClick={this.handleCloseModal.bind(this)}>x</span>
					<label htmlFor="imgUrl">
						<span>url изображения:</span>
						<input id="imgUrl" value={this.state.imgUrl} onChange={this.handleInputUrl.bind(this)} type="text" />
					</label>
					
					<label htmlFor="imgTitle">
						<span>заголовок:</span>
						<input id="imgTitle" value={this.state.imgTitle} onChange={this.handleInputTitle.bind(this)} type="text" />
					</label>
					
					<button onClick={this.handleSubmitModal.bind(this)}>Добавить</button>		
				</div>
			</div>
		)
	}
}