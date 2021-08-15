import { of } from "rxjs"

export const emptyPhone = {
  id: '',
  name: '',
  brand: '',
  msrp: ''
}

export const mockPhone = {
  id: '1',
  name: 'mock name',
  brand: 'mock brand',
  msrp: 'mock msrp'
}

export const mockPhoneFacade = {
  mutations$: of(),
  loadPhones: () => {},
  selectPhone: () => {},
  savePhone: () => {},
  deletePhone: () => {}
}