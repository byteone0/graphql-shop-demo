import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'


const ADD_ORDER = gql`
mutation ($email: String!, $products: JSON!){
	createOrder(
		input: {
			clientMutationId: "abcdef"
			order: {
				email: $email
				products: $products
			}
	}) 
	{
		clientMutationId
		order {
			email
		}
	}
}`

function OrderForm(props) {
	
	let input
	let cart
	let products = {}
	let len = props.cart.length
	
	for (let i=0; i<len; i++) {
		products[i] = props.cart[i]
	}
	cart = JSON.stringify(products)

	return (
		<Mutation mutation={ADD_ORDER}>
			{(addOrder, { data }) => (
				<div>
					<form onSubmit={e => {
							e.preventDefault();
							addOrder({variables:{email: input.value, products: cart}});
							input.value = "";
							document.getElementById('submit-button').style.display = "none"
							document.getElementById('msg').innerHTML = "Order received. To make another order reload page."
						}}>
						Your email:
						<input ref={node => {input = node;}} />
						<button type="submit" id="submit-button">Submit Order</button>
						<div id="msg"></div>
					</form>
				</div>
			)}
		</Mutation>
	);
};


export default OrderForm