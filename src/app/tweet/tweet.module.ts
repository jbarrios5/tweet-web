import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DashboardModule } from "../dashboard/dashobard.module";
import { MaterialModule } from "../material/material.module";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchComponent } from "./pages/search/search.component";
import {  TweetRouting } from "./tweet.routing.module";


@NgModule({
    imports: [TweetRouting,MaterialModule,CommonModule,ReactiveFormsModule,RouterModule,DashboardModule],
    declarations:[SearchComponent,ProfileComponent]
  })
export class TweetModule{}