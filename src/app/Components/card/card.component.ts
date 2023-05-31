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
    this.products=[
      {
        "id":"A1",
        "title":"Camiseta Basica",
        "price": 80000,
        "image": "../../../assets/Image/1.PNG",
        "quantity": {S: 0, M: 0, L: 0},
        "description":"Camiseta verde pino Nuestra icónica camiseta de fit regular se" +
        "renueva en color verde pino y con el logo de TRUE estampado al frente en tono blanco." +
        "Está confeccionada en.",
      },
      {
        "id":"A2",
        "title":"Crop Top",
        "price": 70000,
        "image": "../../../assets/Image/2.PNG",
        "quantity": {S: 0, M: 0, L: 0},
        "description":"Camiseta verde pino Nuestra icónica camiseta de fit regular se" +
        "renueva en color verde pino y con el logo de TRUE estampado al frente en tono blanco." +
        "Está confeccionada en.",
      }
    ]
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
