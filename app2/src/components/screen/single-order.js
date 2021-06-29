import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { OrdersService } from  '../../services/orders.service';

export default function SingleOrderScreen(props)
{
	const { id } = useParams();
	const _os = new OrdersService();
	const [order, setOrder] = useState();
	const [items, setItems] = useState();

	const getSingleOrderDetails = async (orderId) => {
		
		let order = await _os.getSingleOrder(orderId).catch(e => false);

		if(order)
		{
			setOrder(order)
			fetchItems(order.items);
		}
	}

	const fetchItems = async (items) => {

		let products = await _os.getOrderItems(items).catch(e => false);

		if(products)
		setItems(products);
	}

	const printItems = () => {
		
		if(items)
		return items.map((product, key) => {
			return <div className="order-item" key={key}>
				<h3>{product.title}</h3>
				<p><img src={product.image} /></p>
				<p>{product.description}</p>
				<p>Price: {product.price}$</p>
			</div>
		})
	}
	
	const printOrder = () => {
		if(order)
			return (
				<div className="single-order">
					<div key={1} className="order-main">
						<h2>Summary</h2>
						<p>Order id: {order.id}</p>
						<p>Order number: {order.order}</p>
						<p>Tax: {order.tax}%</p>
						<p>Amount: {order.sum}$</p>
						<p>Total: {order.total}$</p>
					</div>
					<div key={2} className="order-shipping">
						<h2>Shipping Details</h2>
						<p>To: {order.receiver.name}</p>
						<p>Address: {order.address.street}</p>
						<p>Zip Code: {order.address.zip}</p>
						<p>City: {order.address.city}</p>
						<p>State: {order.address.state}</p>
					</div>
					<div key={3} className="order-status">
						<p className={order.status}>{order.status}</p>
					</div>
					<div key={4} className="order-items">
						{printItems()}
					</div>
				</div>
			);
	}

	useEffect(() => {
		
		if( id && ! order)
			getSingleOrderDetails(id);
		
	})
		
	return (<div>{printOrder()}</div>)
}