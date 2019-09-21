import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CarouselComponent } from './carousel/carousel.component';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  imports: [],
  exports: [SearchBoxComponent,CarouselComponent,ModalComponent],
  declarations: [SearchBoxComponent,CarouselComponent,ModalComponent],
  providers: [],
})
export class SharedModule { }
