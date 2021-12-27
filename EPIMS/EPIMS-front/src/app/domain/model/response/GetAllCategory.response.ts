import { CategoryData } from "../resource/data/Category.data";
import { BaseResponse } from "./Base.response";

export interface GetAllCategoryResponse extends BaseResponse {
    List: CategoryData[];
}