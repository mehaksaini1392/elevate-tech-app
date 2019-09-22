import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, OnChanges } from '@angular/core';
import * as M from 'materialize-css';
import { Channel } from 'src/app/models/channel.model';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() channelData: Channel;
  modalId:string;
  instanceofModal;
  ngAfterViewInit(): void {
    var modal = document.getElementById('channelInfoModal');
    this.instanceofModal = M.Modal.init(modal);
  }

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    console.log(this.channelData);
  }


}
