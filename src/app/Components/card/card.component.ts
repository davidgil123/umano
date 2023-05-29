import { Component } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  product!:Item;
  price: number= 80000;
  products:Item []=[];
  constructor (public service:UmanoService){
    this.products=service.productsCard;
    console.log(this.products);
  }
  showDetail(item:Item){
    this.service.detail=true;
    this.service.dark=true;
    this.showCard(item)
  }
  showCard(product:Item){
    this.product=product;
  }

}
