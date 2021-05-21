import { useEffect, useState } from "react";
import { ProductsService } from '../../services/products.service';
import ProductBox from  '../partials/product-box';

export default function ProductsScreen ()
{
	const [allProducts, setProducts] = useState(undefined);
	const _ps = new ProductsService();

	const getProducts = async () =>
	{
		let products = await _ps.getAllProducts();
		
		if(products && products.length)
		setProducts(products);
	}

	const listProducts = () => {

		if(allProducts)
		return allProducts.map((product, i) => <ProductBox key={i} {...product}></ProductBox>)
		else
		return (<></>);
		
	}

	useEffect(() => {
		if(! allProducts)
		getProducts();
	})

	return (<div className="products-list">
		{listProducts()}
	</div>);
}