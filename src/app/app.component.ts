import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    // BrowserModule,
    // BrowserAnimationsModule
    // NgbModule
  ],
  selector: 'flovatar-dust-bank-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
