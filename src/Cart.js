import React from 'react'
import OrderForm from './OrderForm'

class Cart extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isToggleOn: true
		};
		this.toggleCart = this.toggleCart.bind(this);
	}

	toggleCart () {
		this.setState({isToggleOn: !this.state.isToggleOn})
		if (this.state.isToggleOn)
			document.getElementById('cartItems').style.display = "block"
		else {
			document.getElementById('cartItems').style.display = "none"
		}
	}

	render() {
		let len = this.props.cart.length
		let total = 0
		for (let i=0; i<len; i++) {
			total += this.props.cart[i].price
		}
		return (
			<div className="cart">
				<p>Your cart contains {this.props.cart.length} item(s).
					<button onClick = {this.toggleCart}>

						{this.state.isToggleOn ? 'Show Cart' : 'Hide Cart'}
					</button>
				</p>
				<div className="cart-items" id="cartItems">
					{this.props.cart.map((product,index) =>
						<div className="cart-item" key={index}> 
							{product.title} &nbsp;
							{product.price} €
						</div>)}
					<b>Total: {total} €</b>
					<OrderForm cart={this.props.cart}/>
				</div>
			</div>
	)}
} 

export default Cart