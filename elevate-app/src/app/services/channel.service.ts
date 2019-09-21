import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Channel } from '../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private _allChannels: Channel[];
  constructor(
    private http: HttpClient

  ) { }

  getChannels(){
    return this.http.get<Channel[]>('../../assets/data/channels.json').pipe(
      tap((resp) => {
        this._allChannels = resp;
        console.log(this._allChannels);
      })
    );
  }

  getAllChannels(){
    return this._allChannels;
  }
}
