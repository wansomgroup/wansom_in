import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { WomenComponent } from './women/women.component';
import { WeeklydealsComponent } from './weeklydeals/weeklydeals.component';
import { MenComponent } from './men/men.component';
import { InstagramComponent } from './instagram/instagram.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CategoriesComponent,
    WomenComponent,
    WeeklydealsComponent,
    MenComponent,
    InstagramComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
