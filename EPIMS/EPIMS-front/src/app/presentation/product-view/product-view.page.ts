import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/domain/model/resource/model/Category.model';
import { ProductModel } from 'src/app/domain/model/resource/model/Product.model';
import { CategoryService } from 'src/app/domain/service/Category.service';
import { ProductService } from 'src/app/domain/service/Product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {

  productList: ProductModel[];
  productListObserver: Observable<ProductModel[]>;

  /**選択済み製品 */
  selectedProduct: ProductModel;

  constructor(private router: ActivatedRoute,
    private alertCtrl: AlertController,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.productList = [];
    this.productListObserver = this.productService.productListObserver;
    this.productListObserver.subscribe(data => {
      this.productList = data;
    });
  }

  category: CategoryModel;

  async ngOnInit() {
    //カテゴリー番号取得
    let categoryNo: number;
    this.router.queryParams.subscribe(params => {
      if (params.categoryNo !== undefined) {
        categoryNo = params.categoryNo;
      }
    });

    this.category = await this.categoryService.getCategory(categoryNo);
    await this.productService.GetProductListByCategoryNo(categoryNo);
    await this.checkProductCount();
  }

  /**
   * 製品の数を確認する。
   * @returns 
   */
  private async checkProductCount() {
    if (this.productList.length > 0) { return; }
    const alert = await this.alertCtrl.create({ header: 'エラー', message: `'${this.category.CategoryName}'<br/>に該当する製品が見つかりませんでした。` });
    await alert.present();
  }

  /**
   * 製品カードを選択
   * @param product 
   */
  onClickProductCard(product: ProductModel) {
    this.selectedProduct = product;
  }

}
