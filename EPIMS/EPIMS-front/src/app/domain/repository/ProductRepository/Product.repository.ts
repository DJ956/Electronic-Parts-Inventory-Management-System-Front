import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetProductResponse } from "../../model/response/GetProduct.response";
import { GetProductListResponse } from "../../model/response/GetProductList.response";

@Injectable({
    providedIn: 'root'
})
export abstract class ProductRepository {
    abstract GetProduct(productNo: number): Observable<GetProductResponse>;
    abstract GetAllProduct(): Observable<GetProductListResponse>;
    abstract GetProductListByCategory(categoryNo: number): Observable<GetProductListResponse>;
}