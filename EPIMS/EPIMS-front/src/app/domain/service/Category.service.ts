import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AppProperty } from "src/app/consts/AppProperty.consts";
import { CategoryModel } from "../model/resource/model/Category.model";
import { GetAllCategoryResponse } from "../model/response/GetAllCategory.response";
import { GetCategoryResponse } from "../model/response/GetCategory.response";
import { CategoryRepository } from "../repository/CategoryRepository/Category.repository";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private categoryOriginList: CategoryModel[];
    private categorySubject: BehaviorSubject<CategoryModel[]>;
    public CategoryObserver: Observable<CategoryModel[]>;

    constructor(private repository: CategoryRepository) {
        this.categoryOriginList = [];
        this.categorySubject = new BehaviorSubject<CategoryModel[]>([]);
        this.CategoryObserver = this.categorySubject.asObservable();
    }


    /**
     * 全てのカテゴリーを取得する
     * @returns 
     */
    public async getAllCategory(): Promise<GetAllCategoryResponse> {
        return new Promise((resolve, rejects) => {
            this.repository.getAllCategory().subscribe(
                (response) => {
                    console.log(response);
                    if (response.ReturnCode === AppProperty.SUCCESS_CODE) {
                        this.categoryOriginList = [];

                        response.CategoryDatas.forEach(data => {
                            let model: CategoryModel = new CategoryModel(data);
                            this.categoryOriginList.push(model);

                        });
                        this.nextCategoryList();
                    }
                    resolve(response);
                }, (error) => {
                    rejects(error);
                });
        });
    }

    /**
     * カテゴリーを取得する
     * @param categoryNo カテゴリー番号
     * @returns 
     */
    public async getCategory(categoryNo: number): Promise<CategoryModel> {
        return new Promise((resolve, rejects) => {
            this.repository.getCategory(categoryNo).subscribe(
                (response) => {
                    let model: CategoryModel = undefined;
                    if (response.ReturnCode === AppProperty.SUCCESS_CODE) {
                        model = new CategoryModel(response.CategoryData);
                    }
                    resolve(model);
                }, (error) => {
                    rejects(error);
                });
        });
    }


    private nextCategoryList() {
        this.categorySubject.next(this.categoryOriginList);
        console.log(this.categoryOriginList);
    }
}