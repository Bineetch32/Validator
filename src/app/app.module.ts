import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Module1Module } from './validation/module1/module1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
