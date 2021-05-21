import React from 'react';

export default function ProductBox(props)
{
	return (<div className="card product-box">
				<img src={props.image} className="card-img-top" alt="Product image" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<p>Price {props.price}$</p>
					<a href="#" className="btn btn-primary">Open</a>
				</div>
			</div>)
}