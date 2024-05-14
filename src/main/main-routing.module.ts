

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./main.component";
import { DetailVetementComponent } from "src/main/detail-vetement/detail-vetement.component";
import { DetailAccessoireComponent } from "src/main/detail-accessoire/detail-accessoire.component";



const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path:'detail-vetement/:id', component:DetailVetementComponent
            },
            {
                path:'detail-accessoire/:id', component:DetailAccessoireComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRountingModule { }
