import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Channel } from "../models/channel.model";
import { ChannelService } from "../services/channel.service";

@Injectable({ providedIn: "root" })
export class ChannelsResolver implements Resolve<Channel[]> {
  constructor(private channelService: ChannelService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Channel[]> {
    return this.channelService.getChannels();
  }
}
