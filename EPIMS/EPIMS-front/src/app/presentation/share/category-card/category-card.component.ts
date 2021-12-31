import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
    this.categoryCount = 0;
  }

  ngOnInit() { }

}
