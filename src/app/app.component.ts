import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './src/components/data-list/data-list.component';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataListComponent, ToolbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'micatu';
}
