import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavigationComponent } from "../dashboard/navigation/navigation.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchComponent } from "./pages/search/search.component";


const routes: Routes = [
    {
        path:'',
        component:NavigationComponent,
        children:[
            {path:'search',component:SearchComponent},
            {path:'profile/:username',component:ProfileComponent},
            {path:'**',redirectTo:'home'},
        ]

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TweetRouting{}