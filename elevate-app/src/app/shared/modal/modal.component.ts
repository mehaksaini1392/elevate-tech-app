import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() channelData;
  @Output() instanceEmit = new EventEmitter();
  modalId:String;
  instanceofModal;
  ngAfterViewInit(): void {
    var modal = document.getElementById('rogersModal');
    this.instanceofModal = M.Modal.init(modal);
  }

  constructor() { }

  ngOnInit() {
    this.instanceEmit.emit(this.instanceofModal);
  }


}
