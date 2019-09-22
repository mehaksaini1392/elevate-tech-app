import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './states/search-result/search-result.component';
import { AppComponent } from './app.component';
import { ChannelsResolver } from './resolver/app.resolvers';
import { ReviewOrderComponent } from './states/review-order/review-order.component';
import { ConfirmationComponent } from './states/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: 'search-result',
    component: SearchResultComponent,
    resolve: [
      ChannelsResolver
    ]
  },
  {
    path: 'review-order',
    component: ReviewOrderComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
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
