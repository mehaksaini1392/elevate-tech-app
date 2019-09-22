import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  customizedPackage=[];
  firstName;
  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.firstName=this.channelService.getName();
    this.customizedPackage=this.channelService.getShoppingCartItems();
  }
}
