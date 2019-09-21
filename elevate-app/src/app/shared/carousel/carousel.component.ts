import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    var carousel = document.getElementById('carousel');
    var instances = M.Carousel.init(carousel);
  }

  constructor() { }

  ngOnInit() {
  }

}
