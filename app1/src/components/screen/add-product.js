import React from 'react';
import { ProductsService } from '../../services/products.service';

export default function AddProductScreen ()
{
	const _ps = new ProductsService();

	const processForm = async (f) => {
		
		f.preventDefault();

		const form = new FormData(f.target);
		
		const result = await _ps.addProduct(form).catch((e) => {return false});
		
		if(result)
		f.target.reset();
		
		return false;
	}

	return (<div className="products-add-new">
			<form onSubmit={(f) => processForm(f)}>
				<div className="form-group">
					<label htmlFor="productTitle">Product title</label>
					<input type="text" name="title" className="form-control" id="productTitle" required />
					<small id="productTitle" className="form-text text-muted">Add product name.</small>
				</div>
				<div className="form-group">
					<label htmlFor="productDescription">Product description</label>
					<textarea type="text" name="description" className="form-control" rows={10} id="productDescription" required ></textarea>
					<small id="productDescription" className="form-text text-muted">Add product description.</small>
				</div>
				<div className="form-group">
					<label htmlFor="productImage">Product image</label>
					<input type="text" name="image" className="form-control" id="productImage" required />
					<small id="productImage" className="form-text text-muted">Add product image url.</small>
				</div>
				<div className="form-group">
					<label htmlFor="productPrice">Product price</label>
					<input type="number" step="0.01" name="price" className="form-control" id="productPrice" required />
					<small id="productPrice" className="form-text text-muted">Add product price.</small>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">Add</button>
				</div>
			</form>
		</div>);
}