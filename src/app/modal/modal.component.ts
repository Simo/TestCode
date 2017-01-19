import { EventEmitter, ViewChild, Input, Output, Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';

import { ModalType } from './modal-type.model';
import { ModalService } from './modal.service';

declare var $: any;

@Component({
  templateUrl: './modal.component.html',
  selector: 'app-modal'
})
export class ModalComponent implements AfterViewInit, OnInit {
  @ViewChild('modal') modalElement: ElementRef;
  title: string;
  body: string;
  modalType: ModalType;
  modalTypeEnum = ModalType;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.statusUpdates.subscribe(c => {
      this.title = c.header || (c.type === ModalType.Confirmation) ? 'Confirm' : 'Information';
      this.body = c.body;
      this.modalType = c.type;
      $(this.modalElement.nativeElement).modal('show');
    });
  }

  ngAfterViewInit() {
    $(this.modalElement.nativeElement).modal({ show: false });
  }

  hide() {
    this.modalService.close(false);
  }

  confirm() {
    this.modalService.close(true);
  }
}
