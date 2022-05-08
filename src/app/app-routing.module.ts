import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './components/pages/home-page/home-page.component'
import { ListPageComponent } from './components/pages/list-page/list-page.component'
import { SearchPageComponent } from './components/pages/search-page/search-page.component'
import { SerieDetailComponent } from './components/pages/serie-detail/serie-detail.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'my-list', component: ListPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'serie/:id', component: SerieDetailComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: HomePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
