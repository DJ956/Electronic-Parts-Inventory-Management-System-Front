import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/consts/APIUrl.consts";
import { GetAllCategoryResponse } from "src/app/domain/model/response/GetAllCategory.response";
import { GetCategoryResponse } from "src/app/domain/model/response/GetCategory.response";
import { CategoryRepository } from "src/app/domain/repository/CategoryRepository/Category.repository";

@Injectable({
    providedIn: 'root'
})
export class CategoryImplRepository extends CategoryRepository {

    constructor(private client: HttpClient) {
        super();
    }

    getAllCategory(): Observable<GetAllCategoryResponse> {
        return this.client.get<GetAllCategoryResponse>(`${APIUrl.BASE_URL}/Category/all`);
    }

    getCategory(categoryNo: number): Observable<GetCategoryResponse> {
        return this.client.get<GetCategoryResponse>(`${APIUrl.BASE_URL}/Category/${categoryNo}`);
    }

}