import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  customizedPackage=[];
  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.customizedPackage=[
    { "ttCode": "TT_CP24",
    "channelPrice": 7},
    { "ttCode": "TT_YTV",
    "channelPrice": 7},{ "ttCode": "TT_CP24",
    "channelPrice": 7},
    { "ttCode": "TT_YTV",
    "channelPrice": 7},{ "ttCode": "TT_CP24",
    "channelPrice": 7},
    { "ttCode": "TT_YTV",
    "channelPrice": 7}];
    //this.channelService.getShoppingCartItems();
  }



}
