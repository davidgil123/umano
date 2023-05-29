import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UmanoService {
  private _productsCar:Item []=[];
  total: number;
  public dark:boolean=false;
  public detail: boolean= false;
  private CARD_KEY:string="PRODUCTS"
  constructor() {
    this.total=0;
    this._productsCar=this.getcard();
    this._productsCar[0]={
      "id":"A1",
      "title":"Camiseta Basica",
      "price": 80000,
      "image": "../../../assets/Image/1.PNG",
      "size": "S",
      "quantity": 1,
      "description":"Camiseta verde pino Nuestra icónica camiseta de fit regular se" +
      "renueva en color verde pino y con el logo de TRUE estampado al frente en tono blanco." +
      "Está confeccionada en.",
    };
    this._productsCar[1]={
      "id":"A2",
      "title":"Crop Top",
      "price": 70000,
      "image": "../../../assets/Image/2.PNG",
      "size": "M",
      "quantity": 1,
      "description":"Camiseta verde pino Nuestra icónica camiseta de fit regular se" +
      "renueva en color verde pino y con el logo de TRUE estampado al frente en tono blanco." +
      "Está confeccionada en.",
    }
   }
  public get productsCard():Item[]{
    return [...this._productsCar];
  }
  addToCar(item:Item){
    const productIndex=this._productsCar.findIndex((cardItem)=>cardItem.id===item.id);
    if(productIndex<0){
      this._productsCar=[...this._productsCar,{...item,quantity:1}];
    } else{
      const cardCopy=this.productsCard;
      item.id=item.id+Math.random();
      cardCopy.push(item);
      this._productsCar=cardCopy;
    }
    this.saveCard();
    this.calcularTotal();
  }
  private saveCard(){
    const jsonCard=JSON.stringify(this._productsCar);
    localStorage.setItem(this.CARD_KEY,jsonCard);
  }
  private getcard():Item[]{
    const jsonCard= localStorage.getItem(this.CARD_KEY);
    if(!jsonCard){
      return [];
    }
    try{
      return JSON.parse(jsonCard);
    }
    catch{
      return [];
    }
  }
  disToCar(item:Item){
    this._productsCar=this.productsCard.filter((producto)=>{
      return producto.id!=item.id;
    });
    this.saveCard();
    this.calcularTotal();
  }
  calcularTotal(){
    this.total=0;
    this.productsCard.map(({price,quantity})=>{
      this.total=this.total+price*quantity;
      return this.total;
    });
  };
}
