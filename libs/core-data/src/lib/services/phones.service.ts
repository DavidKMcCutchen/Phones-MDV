import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Phone } from "@phones/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  model = 'phones';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Phone[]>(this.getUrl())
  };

  find(phoneId: string) {
    return this.httpClient.get<Phone>(this.getUrlById(phoneId))
  };

  create(phones: Phone) {
    return this.httpClient.post<Phone>(this.getUrl(), phones)
  };

  update(phones: Phone) {
    return this.httpClient.patch<Phone>(this.getUrlById(phones.id), phones)
  };

  delete({ id }: Phone) {
    return this.httpClient.delete<Phone>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
