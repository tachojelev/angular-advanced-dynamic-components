import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicHostDirective } from './dynamic-host/dynamic-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicHostDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
