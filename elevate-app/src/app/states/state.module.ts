import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../shared/share.module';
import { CommonModule } from '@angular/common';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SearchResultComponent, ReviewOrderComponent],
  declarations: [SearchResultComponent, ReviewOrderComponent, ConfirmationComponent],
  providers: [],
})
export class StateModule { }
