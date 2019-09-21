import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchResult = new EventEmitter<Channel[]>();
  searchText: string;
  constructor(private channelService: ChannelService) { }

  ngOnInit() {
  }

  generateSearchResult(){
    if(this.searchText && this.searchText.length > 1 ){
      const results : Channel[] = this.channelService.getAllChannels();
      this.searchResult.emit(results);
    }
  }
}
