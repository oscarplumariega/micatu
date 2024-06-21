import { Component } from '@angular/core';
import { MicatuService } from '../../core/services/micatu.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-ad',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-ad.component.html',
  styleUrl: './add-new-ad.component.css'
})
export class AddNewAdComponent {
  adForm!: FormGroup;

  constructor(private service: MicatuService, private fb: FormBuilder,) { }

  ngOnInit() {
    this.adForm = this.fb.group({
      name: '',
      description: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      avatar: '',
      type: 0,
      createdAt: new Date().getDate(),
    })
  }

  uploadAd(){
    this.service.postAd(this.adForm.value);
  }

}
