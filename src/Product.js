import React from 'react'

class Product extends React.Component {

		constructor(props) {
			super(props)
			this.state = {};
			this.addToCart = this.addToCart.bind(this);
		}

		addToCart(id) {
			this.props.addToCart(id);
		}

		render() {
			return (
				<div className="product-item">
					<img src={this.props.product.imageUrl} alt={this.props.product.imageUrl}></img>
					<h2>{this.props.product.title}</h2>
					<p>{this.props.product.description}</p>
					<p className="price">{this.props.product.price} €</p>
					<button  onClick = {this.addToCart.bind(this, this.props.product)}>
						Add to Cart
					</button>
				</div>
			)
		}
}

export default Product