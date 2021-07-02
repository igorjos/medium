import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(
		private _http:HttpClient
	) { }

	getProducts(){
		return this._http.get([environment.api_endpoint, 'products'].join("/"));
	}

	getOrders(){
		return this._http.get([environment.api_endpoint, 'orders'].join("/"));
	}
}
