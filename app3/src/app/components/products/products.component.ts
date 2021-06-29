import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  environment = environment;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getProductsApp()
  {
    return  this.sanitizer.bypassSecurityTrustResourceUrl([environment.micro_app_endpoint, 'app1'].join("/"))
  }
}
