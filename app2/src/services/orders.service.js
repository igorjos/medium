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

}