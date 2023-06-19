import { Component, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  product!:Item;
  price: number= 80000;
  constructor (public service:UmanoService){
    console.log("product: "+this.product);

  }
  addToCart(item:Item){
    this.service.addToCar(item, {S: 1, M: 0, L: 0});
  }
  showDetail(item:Item){
    this.service.detail=true;
    this.service.dark=!this.service.dark;
    this.showCard(item)
  }
  showCard(product:Item){
    this.product=product;
  }

}
