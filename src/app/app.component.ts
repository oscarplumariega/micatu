import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './src/components/data-list/data-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'micatu';
}
