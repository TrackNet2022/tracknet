import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/structure/navbar/navbar.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HomePageComponent } from './components/pages/home-page/home-page.component'
import { SerieTeaserComponent } from './components/elements/serie-teaser/serie-teaser.component'
import { FooterComponent } from './components/structure/footer/footer.component'
import { ListPageComponent } from './components/pages/list-page/list-page.component'
import { CalendarElementComponent } from './components/elements/calendar-element/calendar-element.component'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { SerieDetailComponent } from './components/pages/serie-detail/serie-detail.component'
import { SearchPageComponent } from './components/pages/search-page/search-page.component'
import { SeriesListComponent } from './components/shared/series-list/series-list.component'
import { FormsModule } from '@angular/forms'
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { AddToListButtonComponent } from './components/shared/add-to-list-button/add-to-list-button.component'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SerieTeaserComponent,
    FooterComponent,
    ListPageComponent,
    CalendarElementComponent,
    SerieDetailComponent,
    SearchPageComponent,
    SeriesListComponent,
    AddToListButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
