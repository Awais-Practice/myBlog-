import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categoriesDropdown.component.html',
  styleUrls: ['./categoriesDropdown.component.scss'],
})
export class CategoriesDropdownComponent {
  topic = 'home';

  constructor() {}

  @Input('topics') topics;
  @Output() slectedTopice = new EventEmitter<string>();

  getTopicValue(topic) {
    console.log(topic);

    this.slectedTopice.emit(topic);
  }
}
