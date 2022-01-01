import { ProductData } from "../resource/data/Product.data";
import { BaseResponse } from "./Base.response";

export interface GetProductListResponse extends BaseResponse {
    ProductModelList: ProductData[];
}