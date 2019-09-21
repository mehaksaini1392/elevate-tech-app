import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports: [],
  exports: [SearchBoxComponent,CarouselComponent],
  declarations: [SearchBoxComponent,CarouselComponent],
  providers: [],
})
export class SharedModule { }
