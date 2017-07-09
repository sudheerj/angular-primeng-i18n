import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// import needed PrimeNG modules here
// import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule, PanelModule, SplitButtonModule, ButtonModule, RatingModule, RadioButtonModule} from 'primeng/primeng';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  InputTextModule,
                  PanelModule,
                  SplitButtonModule,
                  ButtonModule,
                  RatingModule,
                  RadioButtonModule,
                  BrowserAnimationsModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
