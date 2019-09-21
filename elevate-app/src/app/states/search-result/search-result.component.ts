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
  modalInstance;
  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.allChannels = this.channelService.getAllChannels();
  }
  receiveData(data){
    this.channelDataForModal = data;

  }
  

}
