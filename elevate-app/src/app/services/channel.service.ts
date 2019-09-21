import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Channel } from '../models/channel.model';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private _allChannels: Channel[];
  private shoppingCart = [];
  constructor(
    private http: HttpClient

  ) { }

  getChannels() {
    return this.http.get<Channel[]>('../../assets/data/channels.json').pipe(
      tap((resp) => {
        this._allChannels = resp;
        console.log(this._allChannels);
      })
    );
  }

  getAllChannels() {
    return this._allChannels;
  }

  getChannelsFilteredByName(searchText) {
    return R.filter((channel: Channel) => {
      return channel.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    }, this._allChannels);
  }

  addChannelToCart(channelId) {
    const channelObj = R.find(R.propEq('ttCode', channelId))(this._allChannels);
    this.shoppingCart.push(channelObj);
  }

  removeChannelFromCart(channelId) {
    const indexToRemove = R.findIndex(R.propEq('ttCode', channelId))(this.shoppingCart);
    R.remove(indexToRemove, this.shoppingCart);
  }

}
