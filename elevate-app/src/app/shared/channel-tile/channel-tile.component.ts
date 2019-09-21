import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';

@Component({
  selector: 'app-channel-tile',
  templateUrl: './channel-tile.component.html',
  styleUrls: ['./channel-tile.component.scss']
})
export class ChannelTileComponent implements OnInit {
  @Input() channelData:Channel;
  @Output() cardTitleEmit = new EventEmitter();
  channelName = "";
  channelLink = "";
  iFPurchased: boolean = true;

  constructor() { }

  ngOnInit() {
    this.channelName = this.channelData.name +'-'+ this.channelData.description.substr(0, 20) + '...';
    this.channelLink = this.channelName + ' - click for more info...';
   
   // this.cardMainTitle = `${this.cardMainTitle.substr(0, 50)}...`;
  }

  purchase(){
    this.iFPurchased = !this.iFPurchased;
  }

  emitModalData(){
    this.cardTitleEmit.emit(this.channelData);
  }

}
