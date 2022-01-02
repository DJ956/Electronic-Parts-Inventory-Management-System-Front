import { CategoryData } from "../resource/data/Category.data";
import { BaseResponse } from "./Base.response";

export interface GetCategoryResponse extends BaseResponse {
    CategoryData: CategoryData;
}