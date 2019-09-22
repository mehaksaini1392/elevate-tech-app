import { NgModule } from "@angular/core";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ChannelTileComponent } from "./channel-tile/channel-tile.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./modal/modal.component";
import { FormsModule } from '@angular/forms';
import { ChannelFilterComponent } from './channel-filter/channel-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule],
  exports: [
    SearchBoxComponent,
    CarouselComponent,
    ChannelTileComponent,
    ModalComponent,
    ChannelFilterComponent
  ],
  declarations: [
    SearchBoxComponent,
    CarouselComponent,
    ChannelTileComponent,
    ModalComponent,
    ChannelFilterComponent
  ],
  providers: []
})
export class SharedModule {}
