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

    /**
     * 全ての製品を取得する
     * @returns 
     */
    public async GetAllProduct(): Promise<GetProductListResponse> {
        return new Promise((resolve, rejects) => {
            this.repository.GetAllProduct().subscribe(
                (response) => {
                    if (response.ReturnCode === AppProperty.SUCCESS_CODE) {
                        this.productListOriginal = [];

                        response.ProductModelList.forEach(p => {
                            this.productListOriginal.push(new ProductModel(p));
                        });
                        this.nextProductList();
                    }
                    resolve(response);
                }, (error) => {
                    rejects(error);
                });
        });
    }

    /**
     * カテゴリ番号と一致する製品を取得する
     * @param categoryNo カテゴリ番号
     * @returns 
     */
    public async GetProductListByCategoryNo(categoryNo: number): Promise<GetProductListResponse> {
        return new Promise((resolve, rejects) => {
            this.repository.GetProductListByCategory(categoryNo).subscribe(
                (response) => {
                    if (response.ReturnCode === AppProperty.SUCCESS_CODE) {
                        this.productListOriginal = [];
                        response.ProductModelList.forEach(p => {
                            this.productListOriginal.push(new ProductModel(p));
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