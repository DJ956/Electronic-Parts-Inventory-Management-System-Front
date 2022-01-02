import { ProductData } from "../data/Product.data";
import { ProductImageData } from "../data/ProductImage.data";

export class ProductModel {
    constructor(private data: ProductData) {
    }

    public get ProductNo(): number { return this.data.ProductNo; }
    public get ProductName(): string { return this.data.ProductName; }
    public get ModelName(): string { return this.data.ModelName; }
    public get Maker(): string { return this.data.Maker; }
    public get ShopCode(): string { return this.data.ShopCode; }

    public get CategoryNo(): number { return this.data.CategoryNo; }
    public get CategoryName(): string { return this.data.CategoryData.CategoryName; }

    public get ImagePathList(): ProductImageData[] { return this.data.ImageDatas; }

}