import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AppProperty } from "src/app/consts/AppProperty.consts";
import { ProductModel } from "../model/resource/model/Product.model";
import { GetProductListResponse } from "../model/response/GetProductList.response";
import { ProductRepository } from "../repository/ProductRepository/Product.repository";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productListOriginal: ProductModel[];
    private productSubject: BehaviorSubject<ProductModel[]>;
    public productListObserver: Observable<ProductModel[]>;

    constructor(private repository: ProductRepository) {
        this.productListOriginal = [];
        this.productSubject = new BehaviorSubject<ProductModel[]>([]);
        this.productListObserver = this.productSubject.asObservable();
    }

    public async GetAllProduct(): Promise<GetProductListResponse> {
        return new Promise((resolve, rejects) => {
            this.repository.GetAllProduct().subscribe(
                (response) => {
                    if (response.ReturnCode === AppProperty.SUCCESS_CODE) {
                        this.productListOriginal = [];

                        response.ProductModelList.forEach(p => {
                            let model = new ProductModel(p);
                            this.productListOriginal.push(model);
                        });
                        this.nextProductList();
                    }
                    resolve(response);
                }, (error) => {
                    rejects(error);
                });
        });
    }

    private nextProductList() {
        this.productSubject.next(this.productListOriginal);
    }

}