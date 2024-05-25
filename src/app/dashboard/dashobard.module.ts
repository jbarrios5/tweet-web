import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { DashboardRouting } from "./dashboard.routing.module";
import { HomeComponent } from "./home/home.component";
import { HomeSummaryComponent } from "./home/pages/home-summary/home-summary.component";
import { LayoutHomeComponent } from "./home/pages/layout/layout.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [DashboardRouting,MaterialModule,CommonModule,ReactiveFormsModule,RouterModule],
    declarations:[NavigationComponent,HomeComponent,LayoutHomeComponent,HomeSummaryComponent]
  })
export class DashboardModule{}