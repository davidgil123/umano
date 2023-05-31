import { Component, Input } from '@angular/core';
import { Size } from 'src/app/enums/size.enum';
import { Item } from 'src/app/interfaces/item';
import { Quantity } from 'src/app/interfaces/quantity';
import { UmanoService } from 'src/app/services/umano.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {
  @Input()
  item!:Item;
  counter: number=1;
  sizes = {S: Size.S,M: Size.M,L: Size.L };
  size: Size | null = null;
  constructor (private service:UmanoService){

  }

  chooseSize(size:Size){
    this.size=size;

  }
  add(){
    this.counter++;
  }
  dis(){
    if(this.counter>1){
      this.counter--;
    }
  }

  toHide(){
    this.service.dark=false;
    this.service.detail=false;
  }

  addToCar(product:Item) {
    if(this.size){
      let quantity: Quantity = {S: 0, M: 0, L: 0};
      quantity[this.size] = this.counter;
      this.service.addToCar(product, quantity);
      this.toHide();
    }
  }
}
