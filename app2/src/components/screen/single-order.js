import React from 'react';
import { useParams } from 'react-router';

export default function SingleOrderScreen(props)
{
	const { id } = useParams();
	console.log(id);
	return (<div>12</div>)
}