import { NgModule } from "@angular/core";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ChannelTileComponent } from "./channel-tile/channel-tile.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./modal/modal.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule],
  exports: [
    SearchBoxComponent,
    CarouselComponent,
    ChannelTileComponent,
    ModalComponent
  ],
  declarations: [
    SearchBoxComponent,
    CarouselComponent,
    ChannelTileComponent,
    ModalComponent
  ],
  providers: []
})
export class SharedModule {}
