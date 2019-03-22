import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListflightComponent } from "./listflight/listflight.component";
import { FormflightComponent } from "./formflight/formflight.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormupdateComponent } from './formupdate/formupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    ListflightComponent,
    FormflightComponent,
    HomeComponent,
    FormupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
