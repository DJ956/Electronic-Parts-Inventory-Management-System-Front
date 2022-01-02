import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/domain/model/resource/model/Product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  @Input() product: ProductModel;

  ngOnInit() { }

}
