import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  topic = 'home';

  constructor() {}

  @Input('topics') topics;
  @Output() slectedTopice = new EventEmitter<string>();

  getTopicValue(topic) {
    console.log(topic);

    this.slectedTopice.emit(topic);
  }
}
