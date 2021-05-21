import React, { useEffect, useState } from 'react';
import { OrdersService } from  '../../services/orders.service';
import OrderItem from '../partials/order-item';

export default function OrdersScreen()
{
	const [allOrders, setOrders] = useState(undefined);
	const _os = new OrdersService();

	const getOrders = async () =>
	{
		let orders = await _os.getAllOrders();
		
		if(orders && orders.length)
		setOrders(orders);
	}

	const listOrders = () => {

		if(allOrders)
		return allOrders.map((order, i) => <OrderItem key={i} {...order}></OrderItem>)
		else
		return (<></>);
		
	}

	useEffect(() => {
		if(! allOrders)
		getOrders();
	})

	return (<div className="orders-list">
		<table className="table table-striped table-hover">
			<thead className="thead-dark">
				<tr>
				<th scope="col">#</th>
				<th scope="col">Order</th>
				<th scope="col">Sum</th>
				<th scope="col">Tax</th>
				<th scope="col">Total</th>
				<th scope="col">Items</th>
				<th scope="col">Status</th>
				</tr>
			</thead>
			<tbody>
			{listOrders()}
			</tbody>
		</table>
	</div>);
}