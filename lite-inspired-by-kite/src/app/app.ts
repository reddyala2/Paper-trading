import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoldingsComponent } from './components/holdings/holdings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HoldingsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lite-inspired-by-kite');
}
