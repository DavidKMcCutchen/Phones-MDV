import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PhonesService } from '@phones/core-data';
import { PhonesComponent } from './phones/phones.component';
import { LoginComponent } from "@phones/ui-login";

const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path:'phones', component: PhonesComponent},
  {path:'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
