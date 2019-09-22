import { Component, OnInit, Input } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  shoppingCartItems:any;

  itemsCount: any;
    subscription: Subscription;
  constructor(private channelService:ChannelService) {
    this.subscription = this.channelService.getMessage().subscribe(data =>{
      this.shoppingCartItems = data.count > 0? data.count : '';
    })
   }

  ngOnInit() {
    this.shoppingCartItems = '';
  }

}
