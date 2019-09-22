import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  Input
} from "@angular/core";
import * as M from "materialize-css";
import { Channel } from "src/app/models/channel.model";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit, AfterViewInit, OnChanges {

  imageArray = [];
  @Input() channelData: Channel;
  ngAfterViewInit(): void {
    // var elems = document.querySelectorAll('.carousel');
    // var instances = M.Carousel.init(elems);
  }

  constructor() {}

  ngOnInit() {}
  ngOnChanges(): void {
    setTimeout(() => {
      if (this.channelData) {
        var elems = document.querySelectorAll(".carousel");
        var instances = M.Carousel.init(elems);
      }
    }, 2000);

  }
}
