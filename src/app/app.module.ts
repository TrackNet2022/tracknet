import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/structure/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SerieTeaserComponent } from './components/elements/serie-teaser/serie-teaser.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { CalendarElementComponent } from './components/elements/calendar-element/calendar-element.component';
import { FavoriteCategoriesElementComponent } from './components/elements/favorite-categories-element/favorite-categories-element.component';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { SerieDetailComponent } from './components/pages/serie-detail/serie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SerieTeaserComponent,
    FooterComponent,
    LoginPageComponent,
    ListPageComponent,
    CalendarElementComponent,
    FavoriteCategoriesElementComponent,
    SerieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
