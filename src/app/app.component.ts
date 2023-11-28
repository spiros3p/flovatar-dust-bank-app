import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  selector: 'flovatar-dust-bank-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'flovatar-dust-bank-app';
}
