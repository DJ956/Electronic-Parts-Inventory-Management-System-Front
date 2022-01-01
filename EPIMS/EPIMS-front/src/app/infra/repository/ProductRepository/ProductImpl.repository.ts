import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/consts/APIUrl.consts";
import { GetProductResponse } from "src/app/domain/model/response/GetProduct.response";
import { GetProductListResponse } from "src/app/domain/model/response/GetProductList.response";
import { ProductRepository } from "src/app/domain/repository/ProductRepository/Product.repository";

@Injectable({
    providedIn: 'root'
})
export class ProductImplRepository extends ProductRepository {

    constructor(private client: HttpClient) {
        super();
    }

    GetProduct(productNo: number): Observable<GetProductResponse> {
        return this.client.get<GetProductResponse>(`${APIUrl.BASE_URL}/product/${productNo}`);
    }

    GetAllProduct(): Observable<GetProductListResponse> {
        return this.client.get<GetProductListResponse>(`${APIUrl.BASE_URL}/product/all`);
    }
    GetProductListByCategory(categoryNo: number): Observable<GetProductListResponse> {
        return this.client.get<GetProductListResponse>(`${APIUrl.BASE_URL}/product/categoeyNo/${categoryNo}`);
    }

}