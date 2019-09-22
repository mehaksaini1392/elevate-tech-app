import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import * as M from "materialize-css";
@Component({
  selector: 'app-channel-filter',
  templateUrl: './channel-filter.component.html',
  styleUrls: ['./channel-filter.component.scss']
})
export class ChannelFilterComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    var elems = document.getElementById('genreSelect');
    var instances = M.FormSelect.init(elems);
  }
  @Input() generesList;
  @Input() langList;
  @Output() language = new EventEmitter();
  @Output() genre = new EventEmitter();
  
  display = false;

  constructor() {
  }
    iniateLangSelectBox(){
      var elems = document.getElementById('langSelect');
      var instances1 = M.FormSelect.init(elems);
    }
  ngOnInit() {
    console.log(this.generesList);
  }

  onChangeGenre(value) {
    if (value === 'Multicultural') {
      this.display = true;
      setTimeout(() => {
        this.iniateLangSelectBox();
      }, 100);
       
     // this.onChangeLang('en')
    } else {
      this.display = false;
    }
    this.genre.emit(value);

  }

  onChangeLang(value) {
    this.language.emit(value);
    this.display = true
  }

}
