import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  topic = 'home';
  constructor() {}
  @Input() topics;
  @Output() topiceValue = new EventEmitter<string>();

  ngOnInit(): void {}
  getValue(value) {
    this.topiceValue.emit(value);
  }
}
