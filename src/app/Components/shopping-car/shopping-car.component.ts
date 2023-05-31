import { Component } from '@angular/core';
import { Size } from 'src/app/enums/size.enum';
import { Item } from 'src/app/interfaces/item';
import { Quantity } from 'src/app/interfaces/quantity';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent {
  public sizes: Size[] = [Size.S, Size.M, Size.L];
  constructor (public service:UmanoService){
  }

  add(product:Item, size: Size) {
    const quantity: Quantity = {S: 0, M: 0, L: 0, [size]: 1};
    this.service.addToCar(product, quantity);
  }

  dis(product:Item, size: Size){
    const quantity: Quantity = {S: 0, M: 0, L: 0, [size]: 1};
    this.service.disToCar(product, quantity);
  }

  disAllOfItemSize(product:Item, size: Size){
    this.service.disToCarAllOfItemSize(product, size);
  }
}

