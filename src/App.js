import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Cart from './Cart'
import Products from './Products'
import './App.css';

const graphqlClient = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
})

class App extends React.Component {

	constructor(props) {
		super(props);
		this.addToCart = this.addToCart.bind(this);
		this.state = {cart: []};
	}

	addToCart(product) {
		let cart = this.state.cart
		cart.push(product)
		this.setState({
			cart: cart
		 })
	}

	render() {
		return (
			<ApolloProvider client={graphqlClient}>
				<div className="App">
					<h1>The Mobility Shop</h1>
					<h3>... pick your poison ...</h3>
					<Cart cart={this.state.cart} />
					<Products addToCart={this.addToCart}/>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;