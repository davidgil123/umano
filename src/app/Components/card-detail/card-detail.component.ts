import { Component, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
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
  size: string="";
  constructor (private service:UmanoService){

  }

  chooseSize(size:string){
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
  addToCar(product:Item){
    if(this.size){
      product.size=this.size;
    this.service.addToCar(product);
    console.log("Se a agregado el siguiente producto",product);
    this.toHide();

  }
  }
}
