import { Quantity } from "./quantity";

export interface Item {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: Quantity;
  description: string;
}
