import { CategoryData } from "../data/Category.data";

export class CategoryModel {

    constructor(private data: CategoryData) { }

    public get CategoryNo(): number {
        return this.data.CategoryNo;
    }

    public get CategoryName(): string {
        return this.data.CategoryName;
    }

    /**
     * カテゴリー画像パス
     */
    private categoryImagePath: string;

    public get CategoryImagePath(): string {
        return this.categoryImagePath;
    }
}