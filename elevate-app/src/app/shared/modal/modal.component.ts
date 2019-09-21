import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    var modal = document.getElementById('rogersModal');
    var instances = M.Modal.init(modal);
  }

  constructor() { }

  ngOnInit() {
  }

}
