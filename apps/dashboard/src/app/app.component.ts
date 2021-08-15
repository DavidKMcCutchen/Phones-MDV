import { Component } from '@angular/core';

@Component({
  selector: 'phones-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Phones';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'phones', icon: 'view_list', title: 'Phones'}
  ]  
}
