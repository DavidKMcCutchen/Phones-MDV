import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonesComponent } from './phones/phones.component';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { PhonesDetailsComponent } from './phones/phones-details/phones-details.component';
import { MaterialModule } from '@phones/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@phones/core-data';
import { CoreStateModule } from '@phones/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, PhonesComponent, PhonesListComponent, PhonesDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
