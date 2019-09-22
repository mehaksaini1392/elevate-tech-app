import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelService } from 'src/app/services/channel.service';

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
  addedToCart: boolean = true;
  hoverEffect = '';


  constructor(
    private channelService: ChannelService
  ) { }

  ngOnInit() {
    this.channelName = (this.channelData.name +' - '+ this.channelData.description).substr(0, 20) + '...';
    this.channelLink = this.channelData.name ;

   // this.cardMainTitle = `${this.cardMainTitle.substr(0, 50)}...`;
  }
  purchase(){
    this.addedToCart = !this.addedToCart;
    //Add to Cart
    if(!this.addedToCart){
      this.channelService.addChannelToCart(this.channelData.ttCode);
    }else{
      //Remove from Cart
      this.channelService.removeChannelFromCart(this.channelData.ttCode);
    }
  }

  emitModalData(){
    // var elem = document.getElementById('channelInfoModal')
    // var instance = M.Modal.getInstance(elem);
    this.cardTitleEmit.emit(this.channelData);
  }

}
