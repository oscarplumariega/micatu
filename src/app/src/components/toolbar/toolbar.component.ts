import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  hideProfileDropdown(){
    if(document.getElementById("drpProfile")?.classList.contains('hidden')){
      document.getElementById("drpProfile")?.classList.remove('hidden');
      document.getElementById("drpProfile")?.classList.add('absolute');
    }else{
      document.getElementById("drpProfile")?.classList.remove('absolute');
      document.getElementById("drpProfile")?.classList.add('hidden');
    }
  }
}
