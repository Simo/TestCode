import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() totalCount: number;
  @Input() pageIndex: number = 1;
  @Output() OnPageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPaging(pageIndex: number) {
    this.OnPageChanged.emit(pageIndex);
  }

}
