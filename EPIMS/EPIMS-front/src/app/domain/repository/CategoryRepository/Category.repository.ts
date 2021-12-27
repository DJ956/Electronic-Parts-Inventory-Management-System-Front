import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAllCategoryResponse } from "../../model/response/GetAllCategory.response";
import { GetCategoryResponse } from "../../model/response/GetCategory.response";

@Injectable({
    providedIn: 'root'
})
export abstract class CategoryRepository {

    /**
     * 全てのカテゴリーデータを取得する
     */
    abstract getAllCategory(): Observable<GetAllCategoryResponse>;

    /**
     * カテゴリーを取得する
     * @param categoryNo カテゴリー番号
     */
    abstract getCategory(categoryNo: number): Observable<GetCategoryResponse>;
}