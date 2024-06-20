import { Component } from '@angular/core';
import { CommunicationService } from '../../core/services/communication.service';
import { Subject, takeUntil } from 'rxjs';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-sale-detail',
  standalone: true,
  imports: [ToolbarComponent, NotFoundComponent],
  templateUrl: './sale-detail.component.html',
  styleUrl: './sale-detail.component.css'
})
export class SaleDetailComponent {
  receivedData: any;
  private unsubscribe = new Subject<void>();

  constructor(private c_service: CommunicationService){}

  ngOnInit(): void {
    this.c_service.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.receivedData = data;
    });
  }

  ngOnDestroy() {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }
}
