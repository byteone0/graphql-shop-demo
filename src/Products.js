import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Product from './Product'


class Products extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			offset: 0,
			orderBy: 'ID_ASC'
		};
		this.sort = this.sort.bind(this)
		this.navigate = this.navigate.bind(this)
	}

	sort(by) {
		this.setState({offset:0, orderBy: by})
	}
	
	navigate (direction) {
		if (direction === 'next')
			this.setState({offset: this.state.offset + 2})
		else if (this.state.offset >= 2){
			this.setState({offset: this.state.offset - 2})
		}
	}

	render() {
		let query = gql `
			{
				allProducts (
					offset: ${this.state.offset}
					first: 2
					orderBy: ${this.state.orderBy}
					) 
				{
					nodes {
						nodeId, id,	title, description, price, imageUrl
					}
				}
			}`

		return (
			<div className="products">

				<button onClick = {this.sort.bind(this, 'PRICE_ASC')}>
					sort by price
				</button>
				<button onClick = {this.sort.bind(this, 'TITLE_ASC')}>
					sort a-z
				</button>

				<Query query = {query}>
					{
						({loading, error, data}) => {

							let products = data.allProducts

							if (loading) 
								return <p>Loading... </p>
							if (error) {
								console.log(error)
								return (<p>An error occured, see console for more details </p>)
							}
							if (products.nodes.length === 0)
								return <p>No more products. Click on &lt;previous&gt;</p>

							return (
								<div className="product-list">
									{products.nodes.map(product =>
										<Product 
											key={product.id} 
											product={product}
											addToCart={this.props.addToCart} />)}
								</div>
							)
						}
					}
				</Query>

				<button onClick = {this.navigate.bind(this, 'previous')}>
					previous
				</button>
				<button onClick = {this.navigate.bind(this, 'next')}>
					next
				</button>
			</div>
		)
	}
}

export default Products