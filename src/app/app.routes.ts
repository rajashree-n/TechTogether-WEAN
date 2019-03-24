import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AnalysisComponent } from './analysis/analysis.component';
import { WelcomeComponent } from "./welcome/welcome.component";

const routes : Routes = [
    {path:'', component: WelcomeComponent, pathMatch: 'full'},
    {path: 'welcome',component: WelcomeComponent, pathMatch: 'full'},
    {path: 'analysis', component: AnalysisComponent, pathMatch: 'full'},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routing = [
    RouterModule.forRoot(routes)
];