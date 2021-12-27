import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CategoryCardComponent } from "./category-card/category-card.component";

@NgModule({
    declarations: [
        CategoryCardComponent,
    ],
    exports: [
        CategoryCardComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ]
})
export class ComponentsModule {

}