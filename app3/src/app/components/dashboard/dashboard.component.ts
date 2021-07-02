import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

	products:Array<any> = [];
	orders:Array<any> = [];
	popular:Array<number> = [];

	constructor(
		private _ds: DataService
	) { }

	ngOnInit(): void {
		this._loadProducts();
		this._loadOrders();
	}

	getProductName(productId:number)
	{
		if(productId && productId != 0)
		return this.products.filter(p => p.id == productId)[0].title;
		else
		return "Empty";
	}

	private _loadProducts(){
		this._ds.getProducts().subscribe((p:Array<any>) => this.products = p);
	}

	private _loadOrders(){
		this._ds.getOrders().subscribe((o:Array<any>) => this.orders = o).add(() => {
			
			this.orders.map((o) => { 
				o.items.map(i => { if( ! this.popular[i]) this.popular[i] = 1; this.popular[i] = this.popular[i]+1})
			});
		});

	}

}
