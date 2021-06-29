import config from '../env';

export class OrdersService
{
	async getAllOrders()
	{
		return fetch([config.api, 'orders'].join("/"), 
			{
				method: "GET",
				mode: 'cors',
				headers: {'Content-Type': 'application/json'}
			}
		)
		.then(r => {
			if(r.ok)
			return r.json();
			
			throw Error(r.statusText);
		})
		.catch(e => {throw Error(e)})
	}

	async getSingleOrder(orderId)
	{
		return fetch([config.api, 'orders', orderId].join("/"),
		{
			method: "GET",
			mode: "cors",
			headers: {'Content-Type': 'application/json'}
		}).then(r => {
			if(r.ok)
			return r.json();
			
			throw Error(r.statusText);
		})
		.catch(e => {throw Error(e)})
	}

	async getOrderItems(items)
	{
		return fetch(`${[config.api, 'products'].join("/")}?${items.map(i => `id=${i}`).join("&")}`, {
			method: "GET",
			mode: "cors",
			headers: {'Content-Type': 'application/json'},
			
		}).then(r => {
			if(r.ok)
			return r.json();
			
			throw Error(r.statusText);
		})
		.catch(e => {throw Error(e)})
		
	}

}