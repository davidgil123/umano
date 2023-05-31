import { Component } from '@angular/core';
import { UmanoService } from './services/umano.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'umano';
  constructor(public service:UmanoService){}

  public closeModal(): void {
    console.log('close');
    this.service.dark = this.service.detail = this.service.isVisibleShoppingCar = false;
  }
}
