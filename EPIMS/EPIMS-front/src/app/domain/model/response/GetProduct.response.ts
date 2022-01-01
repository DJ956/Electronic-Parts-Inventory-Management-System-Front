import { ProductData } from "../resource/data/Product.data";
import { BaseResponse } from "./Base.response";

export interface GetProductResponse extends BaseResponse {
    ProductData: ProductData;
}