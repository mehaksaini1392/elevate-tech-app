import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channel-tile',
  templateUrl: './channel-tile.component.html',
  styleUrls: ['./channel-tile.component.scss']
})
export class ChannelTileComponent implements OnInit {
  @Input() cardImage='cardChannel';
  @Input() cardMainTitle ='Toronto New | Breaking News Headlines...';
  @Input() cardLinkTitle='CP24 - Toronto News'
  @Input() cardTitle='CP24';
  @Input() cardInfo='CP24 is a Canadian English language discretionary service news channel that is owned by Bell Media, a subsidiary of BCE Inc., the channel focuses on local news from the Greater Toronto Area and Southern Ontario, while also covering national and international news.';

  constructor() { }

  ngOnInit() {
    this.cardLinkTitle = this.cardTitle + ' - click for more info...';
   // this.cardMainTitle = `${this.cardMainTitle.substr(0, 50)}...`;
  }

}
