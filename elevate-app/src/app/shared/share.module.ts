import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChannelTileComponent } from './channel-tile/channel-tile.component';

@NgModule({
  imports: [],
  exports: [SearchBoxComponent,CarouselComponent, ChannelTileComponent],
  declarations: [SearchBoxComponent,CarouselComponent, ChannelTileComponent],
  providers: [],
})
export class SharedModule { }
