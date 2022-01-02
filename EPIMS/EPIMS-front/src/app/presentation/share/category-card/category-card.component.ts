import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/domain/model/resource/model/Category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {

  /**
   * カテゴリーモデル
   */
  @Input() model: CategoryModel;

  /**
   * カテゴリの数
   */
  @Input() categoryCount: number;

  constructor(private router: Router) {
    this.categoryCount = 0;
  }

  ngOnInit() { }

  /**
   * カテゴリーを検索条件に製品ページに移動
   */
  onClickBtn() {
    this.router.navigate(['product-view'], { queryParams: { categoryNo: this.model.CategoryNo } });
  }

}
