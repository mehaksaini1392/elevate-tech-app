import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-channel-filter',
  templateUrl: './channel-filter.component.html',
  styleUrls: ['./channel-filter.component.scss']
})
export class ChannelFilterComponent implements OnInit {
  items = [{ //test sample data
    "id": 1,
    "name": "YTV",
    "completed": false,
    "genre": "Family",
    "lng": "French"
  },
  {
    "id": 2,
    "name": "RAI italia",
    "completed": false,
    "genre": "Kids",
    "lng": "Eng"
  },
  {
    "id": 3,
    "name": "RAI italia",
    "completed": false,
    "genre": "Multicultural",
    "lng": "Italian"
  },
  {
    "id": 4,
    "name": "CP24",
    "completed": false,
    "genre": "News",
    "lng": "Eng"
  },
  {
    "id": 5,
    "name": "TVA",
    "completed": false,
    "genre": "Multicultural",
    "lng": "French"
  },
  {
    "id": 6,
    "name": "ESPN Classic Canada",
    "completed": false,
    "genre": "Sports",
    "lng": "English"
  },
  {
    "id": 7,
    "name": "Movie Time",
    "completed": false,
    "genre": "Movies",
    "lng": "English"
  }
  ];
  display = false;

  constructor() {
  }

  ngOnInit() {
  }

  onChangeGenre(value) {
    (value === 'Multicultural') ? this.display = true : this.display = false;
  }

}
