import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {

  environment = environment;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getOrdersApp()
  {
    return  this.sanitizer.bypassSecurityTrustResourceUrl([environment.micro_app_endpoint, 'app2'].join("/"))
  }
}
