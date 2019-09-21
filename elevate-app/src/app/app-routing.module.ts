import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './states/search-result/search-result.component';
import { AppComponent } from './app.component';
import { ChannelsResolver } from './resolver/app.resolvers';

const routes: Routes = [
  {
    path: 'search-result',
    component: SearchResultComponent,
    resolve: [
      ChannelsResolver
    ]
  },
  {
    path: '',
    redirectTo: '/search-result',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
