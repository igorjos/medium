import config from '../env';

export class ProductsService
{
	async getAllProducts()
	{
		return fetch([config.api, 'products'].join("/"), 
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

	async addProduct(data)
	{
		return fetch([config.api, 'products'].join("/"),
		{
			method: "POST",
			mode: "cors",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(Object.fromEntries(data))
		})
		.then(r => {
			if(r.ok)
			return r.json();
			
			throw Error(r.statusText);
		})
		.catch(e => {throw Error(e)})
	}
}