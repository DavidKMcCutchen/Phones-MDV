import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Phone } from '@phones/api-interfaces';

@Component({
  selector: 'phones-phones-details',
  templateUrl: './phones-details.component.html',
  styleUrls: ['./phones-details.component.scss']
})
export class PhonesDetailsComponent {
  currentPhone: Phone;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set phone(value) {
    if (value) this.originalTitle = value.name;
    this.currentPhone = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }

}
