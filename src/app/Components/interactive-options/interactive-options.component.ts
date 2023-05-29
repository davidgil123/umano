import { Component } from '@angular/core';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-interactive-options',
  templateUrl: './interactive-options.component.html',
  styleUrls: ['./interactive-options.component.scss']
})
export class InteractiveOptionsComponent {
constructor(public service:UmanoService){

}
}
