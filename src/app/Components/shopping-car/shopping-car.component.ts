import { Component } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent {
  counter: number=1;
  constructor (public service:UmanoService){

  }
  add(product:Item){
    this.counter++;
    this.addToCar(product);
  }
  dis(product:Item){
    if(this.counter>1){
      this.counter--;
      this.addToCar(product);
    }
}
addToCar(product:Item){
  this.service.addToCar(product);
}
disToCar(product:Item){
  this.service.disToCar(product);
  console.log("eliminar: ",product);
}
}

