import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  imagePath = "assets/imges/logos"
  imageArray=[];
  ngAfterViewInit(): void {
    var carousel = document.getElementById('carousel');
    var instances = M.Carousel.init(carousel);
  }

  constructor() { }

  ngOnInit() {
    this.imageArray = ['assets/imges/logos/TT_CP24.png', 'assets/imges/logos/TT_ESPN_Classic_canada.png', 'assets/imges/logos/TT_Movietime.png'];
  }

}
