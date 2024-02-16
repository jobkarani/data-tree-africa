import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroComponent } from './hero/hero.component';
import { DataSenseComponent } from './data-sense/data-sense.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { EmpowerComponent } from './empower/empower.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DataSenseComponent,
    SolutionsComponent,
    EmpowerComponent,
    ContactUsComponent,
    FooterComponent,
    LoaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
