import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Channel } from '../models/channel.model';
import * as R from 'ramda';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private _allChannels: Channel[];
  private shoppingCart = [];
  private name;
  private subject = new Subject<any>();
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
    this.sendMessage(this.shoppingCart.length)
  }

  removeChannelFromCart(channelId) {
    const indexToRemove = R.findIndex(R.propEq('ttCode', channelId))(this.shoppingCart);
    this.shoppingCart.splice(indexToRemove, 1);
    this.sendMessage(this.shoppingCart.length)
  }

  getShoppingCartItems(){
    return this.shoppingCart;
  }

  getItemsCount(){
    return this.shoppingCart.length;
  }

  sendMessage(message: any) {
    this.subject.next({ count: message });
  }
  clearMessage() {
    this.subject.next();
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  getAllAvailableGenres(){
    let genres =  R.pluck('genre')(this._allChannels);
    let flattenGenreData = R.flatten(genres);
    let uniquegenres =  new Set(flattenGenreData);
    console.log(new Set(flattenGenreData));
     return uniquegenres;
   }
  saveName(name){
    this.name=name;
  }
  getName(){
    return this.name;
  }

   getAllLangugues(){
    let genres =  R.pluck('programLanguages')(this._allChannels);
    let flattenGenreData = R.flatten(genres);
    let uniqueLang =  new Set(flattenGenreData);
    console.log(new Set(flattenGenreData));
     return uniqueLang;

   }

   getChannelsFilteredByLanguage(searchText) {
    return R.filter((channel: Channel) => {
      return channel.programLanguages.indexOf(searchText) > -1;
    }, this._allChannels);
  }

  getChannelsFilteredByGenre(searchText) {
    return R.filter((channel: Channel) => {
      return channel.genre.indexOf(searchText) > -1;
    }, this._allChannels);
  }
}
