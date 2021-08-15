import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneFacade } from '@phones/core-state';
import {  } from "@phones/testing";
import { PhonesComponent } from './phones.component';

/* Unit Testing References (https://jestjs.io/docs/getting-started)

  describe:
    usage: describe(name, fn): creates a block that groups together several related tests.
    example: describe('someMethod', () => { ... method specific tests })

  it:
    usage: it(name, fn): performs individual test
    example: it('explanation of test', () => { ... test body })

  spyOn:
    usage: jest.spyOn(object, methodName): Creates a mock function, and observes calls to method
    example: jest.spyOn(facade, 'selectMethod')

  expect:
    usage: expect(value).matcher(value): Runs assertion within test (fail/pass)
    example: expect(true).toBeTrue()

*/

/* Declare mutable references (re-instantiated before each test) */

describe('PhonesComponent', () => {
  let component: PhonesComponent;
  let fixture: ComponentFixture<PhonesComponent>;
  let phoneFacade: PhoneFacade

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
