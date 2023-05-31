import { Component } from '@angular/core';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
constructor(public service:UmanoService){

}
}
