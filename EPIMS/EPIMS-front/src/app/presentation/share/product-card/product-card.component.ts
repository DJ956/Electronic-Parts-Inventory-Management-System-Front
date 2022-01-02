import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/domain/model/resource/model/Product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() product: ProductModel;

  ngOnInit() { }

}
