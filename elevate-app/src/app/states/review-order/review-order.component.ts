import { Component, OnInit } from "@angular/core";
import { ChannelService } from "src/app/services/channel.service";
import { Channel } from "src/app/models/channel.model";
import * as R from "ramda";

@Component({
  selector: "app-review-order",
  templateUrl: "./review-order.component.html",
  styleUrls: ["./review-order.component.scss"]
})
export class ReviewOrderComponent implements OnInit {
  selectedChannels: Channel[];
  constructor(private channelService: ChannelService) {}
  totalAmount = 0;
  tax = 0;
  result = 0;
  firstName;
  ngOnInit() {
    this.selectedChannels = this.channelService.getShoppingCartItems();
    this.setTotalAmount();
  }

  removeItem(channelId) {
    this.channelService.removeChannelFromCart(channelId);
    this.selectedChannels = this.channelService.getShoppingCartItems();
    this.setTotalAmount();
  }

  setTotalAmount() {
    this.totalAmount = 0;
    R.forEach((channel: Channel) => {
      this.totalAmount += channel.channelPrice;
    }, this.selectedChannels);

    this.tax = this.totalAmount * 0.13;
    this.result = this.totalAmount * 1.13;
  }

  submitForm(){
    console.log("firstName : "+this.firstName);
    this.channelService.saveName(this.firstName);
  }
}
