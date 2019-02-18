import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormflightComponent } from "./formflight/formflight.component";
import { ListflightComponent } from "./listflight/listflight.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/tickets", pathMatch: "full" },
  { path: "supervisor", component: HomeComponent },
  { path: "tickets", component: FormflightComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: "list", component: ListflightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
