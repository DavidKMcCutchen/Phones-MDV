import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyPhone, Phone } from '@phones/api-interfaces';
import { PhoneFacade } from '@phones/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'phones-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  allPhones$: Observable<Phone[]> = this.phoneFacade.allPhones$;
  selectedPhone$: Observable<Phone> = this.phoneFacade.selectedPhones$

  form: FormGroup

  constructor(
    private phoneFacade: PhoneFacade,
    private formBuilder: FormBuilder
  ) {
    this.phoneFacade.mutations$.subscribe((_) => this.resetPhone());
  }

  ngOnInit() {
    this.initForm();
    this.phoneFacade.loadPhones();
    this.resetPhone();
  }
  selectPhone(phone: Phone) {
    this.phoneFacade.selectPhone(phone.id)
    this.form.patchValue(phone);
  }

  savePhone(phone: Phone) {
    this.phoneFacade.savePhone(phone);
  }

  deletePhone(phone: Phone) {
    this.phoneFacade.deletePhone(phone);
  }

  resetPhone() {
    this.form.reset();
    this.selectPhone(emptyPhone)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      brand: [''],
      msrp: ['']
    })
  }

}
