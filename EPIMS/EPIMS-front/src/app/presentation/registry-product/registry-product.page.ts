import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CategoryModel } from 'src/app/domain/model/resource/model/Category.model';
import { CategoryService } from 'src/app/domain/service/Category.service';
import { ProductService } from 'src/app/domain/service/Product.service';

@Component({
  selector: 'app-registry-product',
  templateUrl: './registry-product.page.html',
  styleUrls: ['./registry-product.page.scss'],
})
export class RegistryProductPage implements OnInit {

  constructor(private activeRouter: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.uploadProductImageList = [];
  }

  /**アップロードする製品画像リスト */
  uploadProductImageList: string[];


  category: CategoryModel;
  /** DropDownに入っているか */
  hasBaseDropZoneOver: boolean = false;


  async ngOnInit() {
    //カテゴリー番号取得
    let categoryNo: number;
    this.activeRouter.queryParams.subscribe(params => {
      if (params.categoryNo !== undefined) {
        categoryNo = params.categoryNo;
      }
    });
    this.category = await this.categoryService.getCategory(categoryNo);
  }

  onUploadProductImage(imageList: string[]) {
    console.log(imageList);
  }


}
