import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/domain/model/resource/model/Category.model';
import { ProductModel } from 'src/app/domain/model/resource/model/Product.model';
import { CategoryService } from 'src/app/domain/service/Category.service';
import { ProductService } from 'src/app/domain/service/Product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categoryList: CategoryModel[];
  public categoryObserver: Observable<CategoryModel[]>;

  productList: ProductModel[];
  public productListObserver: Observable<ProductModel[]>;

  constructor(private categoryService: CategoryService,
    private productService: ProductService) {
    this.categoryList = [];
    this.categoryObserver = this.categoryService.CategoryObserver;
    this.categoryObserver.subscribe(data => {
      this.categoryList = data;
    });

    this.productList = [];
    this.productListObserver = this.productService.productListObserver;
    this.productListObserver.subscribe(data => {
      this.productList = data;
    });
  }

  async ngOnInit() {
    await this.categoryService.getAllCategory();
    await this.productService.GetAllProduct();
  }

}
