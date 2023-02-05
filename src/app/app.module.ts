import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';
import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AccordionSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
