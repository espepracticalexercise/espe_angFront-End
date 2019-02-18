import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-listflight",
  templateUrl: "./listflight.component.html",
  styleUrls: ["./listflight.component.css"]
})
export class ListflightComponent implements OnInit {
  products: any = [];
  constructor(public rest: RestService) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }
}
