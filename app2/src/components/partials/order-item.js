import React from 'react';
import{ NavLink	} from "react-router-dom";
export default function OrderItem(props)
{
	return (<tr>
		<td>{props.id}</td>
		<td><NavLink exact to={`/order/${props.id}`}>{props.order}</NavLink></td>
		<td>{props.sum} $</td>
		<td>{props.tax} $</td>
		<td>{props.total} $</td>
		<td>{props.items.length}</td>
		<td>{props.status}</td>
	</tr>)
}