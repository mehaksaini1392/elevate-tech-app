import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../shared/share.module';
import { CommonModule } from '@angular/common';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [SearchResultComponent, ReviewOrderComponent],
  declarations: [SearchResultComponent, ReviewOrderComponent, ConfirmationComponent],
  providers: [],
})
export class StateModule { }
