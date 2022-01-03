import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CategoryCardComponent } from "./category-card/category-card.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { UploadPhotoViewComponent } from "./upload-photo-view/upload-photo-view.component";

@NgModule({
    declarations: [
        CategoryCardComponent,
        ProductCardComponent,
        ProductInfoComponent,
        UploadPhotoViewComponent,
    ],
    exports: [
        CategoryCardComponent,
        ProductCardComponent,
        ProductInfoComponent,
        UploadPhotoViewComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ]
})
export class ComponentsModule {

}