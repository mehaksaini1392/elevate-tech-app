import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from '../shared/share.module';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [SearchResultComponent],
  declarations: [SearchResultComponent],
  providers: [],
})
export class StateModule { }
