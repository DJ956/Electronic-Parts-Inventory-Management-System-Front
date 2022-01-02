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


  getImageData(): string {
    if (this.product.ImagePathList.length === 0) { return ""; }
    return "data:image/jpg;base64," + this.product.ImagePathList[0].ImagePath;
  }

  ngOnInit() { }

}
