import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-channel-tile',
  templateUrl: './channel-tile.component.html',
  styleUrls: ['./channel-tile.component.scss']
})
export class ChannelTileComponent implements OnInit {
  @Input() channelData;
  @Output() cardTitleEmit = new EventEmitter();
  @Input() cardImage='cardChannel';
  @Input() cardMainTitle ='Toronto New | Breaking News Headlines...';
  @Input() cardLinkTitle='CP24 - Toronto News'
  @Input() cardTitle='CP24';
  @Input() cardInfo='CP24 is a Canadian English language discretionary service news channel that is owned by Bell Media, a subsidiary of BCE Inc., the channel focuses on local news from the Greater Toronto Area and Southern Ontario, while also covering national and international news.';
  iFPurchased: boolean = true;

  constructor() { }

  ngOnInit() {
    this.cardLinkTitle = this.cardTitle + ' - click for more info...';
   
   // this.cardMainTitle = `${this.cardMainTitle.substr(0, 50)}...`;
  }

  purchase(){
    this.iFPurchased = !this.iFPurchased;
  }

  emitModalData(){
    this.cardTitleEmit.emit(this.cardTitle);
  }

}
