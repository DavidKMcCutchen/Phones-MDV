import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Phone } from '@phones/api-interfaces';

@Component({
  selector: 'phones-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.scss']
})
export class PhonesListComponent {
  @Input() phones: Phone[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
