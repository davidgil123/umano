import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { Quantity } from '../interfaces/quantity';
import { Size } from '../enums/size.enum';

@Injectable({
  providedIn: 'root'
})
export class UmanoService {
  private _productsCar:Item []=[];
  private _quantity: number = 0;
  total: number;
  public get quantity(): number {
    return this._quantity;
  }
  public isVisibleShoppingCar:boolean=false;
  public dark:boolean=false;
  public detail: boolean= false;
  private CARD_KEY:string="PRODUCTS"
  constructor() {
    this.total=0;
    this._productsCar=this.getcard();
    this.calcularTotal();
   }
  public get productsCard():Item[]{
    return [...this._productsCar];
  }
  addToCar(item:Item, quantity: Quantity){
    const product = this._productsCar.find(cardItem => cardItem.id === item.id);
    if (!product) {
      this._productsCar = [ ...this._productsCar, { ...item, quantity } ];
    } else {
      product.quantity.S += quantity.S;
      product.quantity.M += quantity.M;
      product.quantity.L += quantity.L;
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

  disToCar(item:Item, quantity: Quantity) {
    item.quantity.S -= quantity.S;
    item.quantity.M -= quantity.M;
    item.quantity.L -= quantity.L;

    if (item.quantity.S < 1 && item.quantity.M < 1 && item.quantity.L < 1) {
      this._productsCar.splice(this._productsCar.indexOf(item), 1);
    }

    this.saveCard();
    this.calcularTotal();
  }

  disToCarAllOfItemSize(item:Item, size: Size){
    item.quantity[size] = 0;
    if (item.quantity.S < 1 && item.quantity.M < 1 && item.quantity.L < 1) {
      this._productsCar.splice(this._productsCar.indexOf(item), 1);
    }
    this.saveCard();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = 0;
    this._quantity = 0;
    this.productsCard.forEach(({price,quantity})=>{
      this.total +=  (price * quantity.S) + (price * quantity.M) + (price * quantity.L);
      this._quantity += quantity.S + quantity.M + quantity.L;
    });
  };

  showShoppingCar(){
    this.isVisibleShoppingCar=!this.isVisibleShoppingCar;
    this.dark=!this.dark;
  }
}
