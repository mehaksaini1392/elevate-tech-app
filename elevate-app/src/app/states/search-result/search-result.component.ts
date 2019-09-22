import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  allChannels: Channel[];
  channelDataForModal;
  allGeneres;
  allLanguages;
  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.allChannels = this.channelService.getAllChannels();
    this.allGeneres = this.channelService.getAllAvailableGenres();
    this.allLanguages = this.channelService.getAllLangugues();
  }

  receiveData(data) {
    this.channelDataForModal = data;
  }

  searchResult(results) {
    this.allChannels = results;
  }

  searchByLanguage(value){
    this.allChannels = this.channelService.getChannelsFilteredByLanguage(value);
    console.log(this.allChannels);
  }

  searchByGenre(value){
    if(value == 'Multicultural'){
      this.allChannels = this.channelService.getAllChannels();
    } else {
      this.allChannels = this.channelService.getChannelsFilteredByGenre(value);
      console.log(this.allChannels);
    }
    
  }
}
