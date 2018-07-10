import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import Item from '../components/Item.js'
import AddModal from '../components/AddModal.js'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = this.props.pageActions.getImages()
		this.state = { modalDisplay: false }
	}

	handleItemUnmount(index) {
		let images = this.props.page.images
		images.splice (index, 1)
		this.setState({images: images})
	}

	handleOpenModal() {
		this.setState({ modalDisplay: true })
	}

	handleCloseModal() {
		this.setState({ modalDisplay: false })
	}

	handleSubmitModal(imgData) {
		this.setState({ modalDisplay: false })
		const newItem = { id: this.props.page.images.length + 2, image_url: imgData.imgUrl, text: '', title: imgData.imgTitle }
		this.setState({ images: this.props.page.images.push(newItem) })
	}

	render() {
		const { modalDisplay } = this.state
		const { fetching, error } = this.props
		const { page } = this.props
		return <div className="app">
			<h3>Images</h3>
			{error ? <p className='error'>Произошла ошибка</p> : ''}

			{
				fetching ?
					<p>Загрузка...</p>
					:
					<ul className="images-grid">
							{
								page.images.map((entry, index) =>
								<Item key={index} index={index} image={entry} onDelete={this.handleItemUnmount.bind(this)} />
							)
							}
					</ul>
			}
				<button className="add-image-btn" onClick={this.handleOpenModal.bind(this)}> Добавить</button>

			{modalDisplay ? <AddModal onCloseModal={this.handleCloseModal.bind(this)} onSubmitModal={this.handleSubmitModal.bind(this)} />: null } 

		</div>
	}
}

function mapStateToProps(state) {
	return {
		page: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)