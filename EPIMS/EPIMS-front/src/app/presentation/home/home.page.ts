import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/domain/model/resource/model/Category.model';
import { CategoryService } from 'src/app/domain/service/Category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categoryList: CategoryModel[];
  public categoryObserver: Observable<CategoryModel[]>;

  constructor(private categoryService: CategoryService) {
    this.categoryList = [];
    this.categoryObserver = this.categoryService.CategoryObserver;
    this.categoryObserver.subscribe(data => {
      this.categoryList = data;
    });
  }

  async ngOnInit() {
    await this.categoryService.getAllCategory();
  }

}
