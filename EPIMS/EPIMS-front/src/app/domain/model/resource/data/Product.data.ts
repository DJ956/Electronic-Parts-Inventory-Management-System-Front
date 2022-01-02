import { CategoryData } from "../data/Category.data";
import { ProductImageData } from "./ProductImage.data";

export interface ProductData {
    /**
     * 製品番号
     */
    ProductNo: number;

    /**
     * 製品名
     */
    ProductName: string;

    /**
     * 型番
     */
    ModelName: string;

    /**
     * 通販コード
     */
    ShopCode: string;

    /**
     * メーカー
     */
    Maker: string;

    /**
     * カテゴリ番号
     */
    CategoryNo: number;

    /**
     * カテゴリー
     */
    CategoryData: CategoryData;

    /**
     * 製品画像リスト
     */
    ImageDatas: ProductImageData[];
}