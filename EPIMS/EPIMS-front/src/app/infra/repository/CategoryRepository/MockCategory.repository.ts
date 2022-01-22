import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetAllCategoryResponse } from "src/app/domain/model/response/GetAllCategory.response";
import { GetCategoryResponse } from "src/app/domain/model/response/GetCategory.response";
import { CategoryRepository } from "src/app/domain/repository/CategoryRepository/Category.repository";

export class MockCategoryRepository extends CategoryRepository {

    constructor(private client: HttpClient) {
        super();
    }

    getAllCategory(): Observable<GetAllCategoryResponse> {
        return this.client.get<GetAllCategoryResponse>("./assets/mock/category/data.json");
    }

    getCategory(categoryNo: number): Observable<GetCategoryResponse> {
        throw new Error("Method not implemented.");
    }

}