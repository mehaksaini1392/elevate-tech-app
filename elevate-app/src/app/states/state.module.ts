import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../shared/share.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SearchResultComponent],
  declarations: [SearchResultComponent],
  providers: [],
})
export class StateModule { }
